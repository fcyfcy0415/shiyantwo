const Mock = require('mockjs')
const Random = Mock.Random
const Url = 'http://mockjs.com/api'
const code = 200
// 造数据
Random.extend({
    // 随机 12星座
    constellation: function() {
        var constellations = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
        return this.pick(constellations)
    },
    // 随机 身份证号码
    idCard: function(){
        // 生成随机数字，max限制最大值，base限制最小值
        function getRandom(max, base) { 
            return Math.floor(Math.random() * max + (base ? base : 0));
        }
        // 根据前17位生成末位
        function cnNewID(idcard) {
            var arrExp = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]; // 加权因子
            var arrValid = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2]; // 校验码
            // var sum = 0, idx;
            var sum = 0;
            for (var j = 0; j < 17; j++) {
            // 对前17位数字与权值乘积求和
            sum += parseInt(idcard[j], 10) * arrExp[j];
            }
            return arrValid[sum % 11];
        }
        // 生成身份证号
        function getIdcard() {
            var idcard = '';
            for(var i = 0; i < 18; i++) {
                if(i < 6) {
                    idcard += getRandom(10)
                }else if(i == 6) {
                    idcard += getRandom(2, 1) //年份第一位仅支持1和2
                }else if(i == 7) { 
                    idcard += idcard[6] == '1' ? 9 : 0;//两位年份规则，仅支持19和20
                }else if(i == 8) {
                    idcard += idcard[6] == '1' ? getRandom(7, 3) : getRandom(2); //三位年份规则，仅支持193-199、200、201这些值
                }else if(i == 9) {
                    idcard += getRandom(10) //四位年份规则,0-9
                }else if(i == 10) {
                    idcard += getRandom(2);//首位月份规则
                }else if(i == 11) {
                    idcard += idcard[10] == '0' ? getRandom(9, 1) : getRandom(3);//末位月份规则
                }else if(i == 12) {
                    if(idcard.substr(8, 2) % 4 != 0) {//首位日期规则，闰年没有30几号
                        idcard += getRandom(4, 0);
                    }else {
                        idcard += getRandom(3, 0);
                    }
                }else if(i == 13) {
                    if(idcard[12] == 0) {//末位日期规则
                        idcard += getRandom(9, 1);
                    }else if(idcard[12] > 0 && idcard[12] < 3) {
                        if(idcard.substr(8, 2) % 4 != 0 && idcard.substr(10, 2) == '02') { // 判断闰年2月没有29号
                            idcard += getRandom(9, 1);
                        }else {
                            idcard += getRandom(10);
                        }
                    }else {

                        idcard +=getRandom(2);
                    }
                }else if(i > 13 && i < 17) {
                    idcard += getRandom(10)
                }else if(i == 17) {
                    idcard += cnNewID(idcard);
                }
            }
            return idcard;
        }
        var idcard = getIdcard();
        return idcard;
    },
    // 随机  特殊的名字 如 信用社 有限公司 公安 等等
    comName: function(data){
        var a = Random.cname(2,5);
        var b = a+data;
        return b
    },
    // 身份证正反图片
    idCardPic: function(){
        var a = {
            0: Random.dataImage('120x90', '身份证人头'),
            1: Random.dataImage('123x90', '身份证国徽'),
        }
        return a
    },
    // 随即电话
    phone: function(){
        var prefixArray = new Array("130", "131", "132", "133", "135", "137", "138", "170", "187", "189");
        var i = parseInt(10 * Math.random());
        var prefix = prefixArray[i];
        for (var j = 0; j < 8; j++) {
            prefix = prefix + Math.floor(Math.random() * 10);
        }
        return prefix;
    },
    // 性别 x 为 true 时 性别加入未知
    sex: function(x){
        var constellations = ['男','女'];
        if(x){
            constellations = ['男','女','未知'];
        }
        return this.pick(constellations);
    },
    // 有效期
    twoDate: function(){
        var a = Random.date('yyyy-MM-dd');
        var b = Random.date('yyyy-MM-dd');
        var c = '';
        if(a>b){
            c = b + '至' + a;
        }else{
            c = a + '至' + b;
        }
        return c;
    },
    // 随机游戏昂
    email: function(){
        var a = ['@qq.com','@126.com','@163.com','@163.com','@139.com','@189.com']
        var b = '';
        for (var j = 0; j < 10; j++) {
            b = b + Math.floor(Math.random() * 10);
        }
        var c = b + this.pick(a);
        return c;
    },
    number: function(x){
        var b = '';
        for (let i = 0; i < x; i++) {
            b = b + Math.floor(Math.random() * 10);
        }
        return b;
    },
    // 
    fiancatitle: function() {
        var dataparam = ['业绩比较基准', '预期收益率', '业绩比较基准', '七日年华']
        return this.pick(dataparam)
    },
    typex: function() {
        var typex = ['(封闭式净值型)', '(封闭式非净值型)','(开放式净值型，到期赎回)','(开放式净值型，到期自动续期)','(货币型)']
        return this.pick(typex)
    }
});

const postData = req =>{
    window.console.log(req)
    let posts = [] // 用于存放文章数据的数组
    
    for (let i = 0; i < 10; i++) {
        let post = {
            title: Random.csentence(10, 25),               // 随机生成长度为10-25的标题
            icon: Random.dataImage('250x250', '文章icon'), // 随机生成大小为250x250的图片链接
            author: Random.cname(),                        // 随机生成名字
            date: Random.date() + ' ' + Random.time(),     // 随机生成年月日 + 时间
            sex: Random.sex()                              // 性别
        }

        posts.push(post)
    }
    return{
        code,
        posts
    }
};
const finance = req =>{
    window.console.log(req)
    let posts = [] // 用于存放文章数据的数组
  
    for (let i = 0; i < 10; i++) {
        let post = {
            id: Random.number(7),
            title: Random.csentence(10, 25), // 随机生成长度为10-25的标题
            typex: Random.typex(), // 类型
            numberone: Random.number(3),
            numbertwo: Random.number(3)/100 + '%',
            date: Random.date(),    // 随机生成年月日 + 时间
            dataTleOne: '持有股份',
            dataTleTwo: Random.fiancatitle(),
            dataTleThree: '到期日',
        }
        posts.push(post)
    }
    return{
        code,
        posts
    }
};
Mock.mock(`${Url}/posts`,'get',postData);
Mock.mock(`${Url}/financeposts`,'get',finance);