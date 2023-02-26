//날짜
let date = new Date();
let year = String(date.getFullYear());
let month = String(date.getMonth()+1).padStart(2,"0");
let day = String(date.getDate()).padStart(2,"0");
let now = year+month+day;
let pageNow = `${year}년 ${month}월 ${day}일`
let api = document.querySelector('.api');
//Fetch
const castCon = document.querySelector("#weather");
let statusText,rainIcon,locText;
rainIcon=['<i class="bi bi-cloud-drizzle"></i>','<i class="bi bi-brightness-high"></i>','<i class="bi bi-cloud"></i>','<i class="bi bi-cloud-snow"></i>',];

let url = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/';
let params = {
    type : ['getUltraSrtNcst','getVilageFcst'],
    key : 'AveojOZ5ZNcfL29JQhWKdzFdcIOInK0reWkvwc%2B%2Bmzf5gGSgUoHNv24YP3jNGPiXAUqNyYSfpr2dtsynkZJOgg%3D%3D',
    pageNo:'1',
    numOfRows : '10',
    dataType : 'JSON',
    base_date : now,
    base_time : '0600',
    nx : '65',
    ny : '110'
}
url = `${url}${params.type[0]}?serviceKey=${params.key}&pageNo=${params.pageNo}&numOfRows=${params.numOfRows}&dataType=${params.dataType}&base_date=${params.base_date}&base_time=${params.base_time}&nx=${params.nx}&ny=${params.ny}`

async function getPosts(){
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

setPosts();
async function setPosts(){
    const posts = await getPosts();
    const datas = posts.response.body.items.item;
    const castp = document.createElement('div');

    let cast={
        baseDate:datas[0].baseDate,
        rain:datas[0].obsrValue,
        rainInfo:function(){
            let info = this.rain;
            if(info==0){
                statusText="맑아요";
                rainIcon=rainIcon[1];
            }else{
                if(info==1){
                    statusText='비가옵니다';
                    rainIcon=rainIcon[0];
                }else if(info==2){
                    statusText='비나 눈이 와요';
                    rainIcon=rainIcon[3];
                }else{
                    statusText='흐려요';
                rainIcon=rainIcon[2];}
            }

        },
        temperature:datas[3].obsrValue,
        wind:datas[5].obsrValue,
        nx:datas[0].nx,
        ny:datas[0].ny,
        loc:function(){
            let point=[this.nx,this.ny];
            if(point[0]==65 && point[1]==110){
                locText="충남/천안"
            }
        }
    }
    cast.rainInfo();
    cast.loc();
    castp.innerHTML=`
    <p class ="pr" style="right: 50px;">${pageNow} </p>
    <div class="weather-result df">
        <p>${statusText}</p>
        <p style="font-size:24px">${rainIcon}</p>
        <p>기온 ${cast.temperature}℃</p>
        <p><a href="https://www.weather.go.kr/w/index.do" style="font-size:12px">출처:기상청</a></p>
    </div>`
        
    
    castCon.appendChild(castp);
};