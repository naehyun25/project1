//날짜
let date = new Date();
let year = String(date.getFullYear());
let month = String(date.getMonth()+1).padStart(2,"0");
let day = String(date.getDate()).padStart(2,"0");
let now = year+month+day;

//Fetch
const castCon = document.querySelector("#weather");
console.log(castCon);
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
url = `${url}${params.type[0]}?serviceKey=${params.key}&pagNo=${params.pageNo}&numOfRows=${params.numOfRows}&dataType=${params.dataType}&base_date=${params.base_date}&base_time=${params.base_time}&nx=${params.nx}&ny=${params.ny}`

async function getPosts(){
    const res = await fetch(url);
    console.log("res",res)
    const data = await res.json();
    return data;
}

setPosts();
async function setPosts(){
    const posts = await getPosts();
    console.log(posts);
    const datas = posts.response.body.items.item;
    console.log(datas);
    //ehdwjrdythtodtjd
    const castp = document.createElement('p');

    let cast={
        baseDate:datas[0].baseDate,
        rain:datas[0].obsrValue,
        rainInfo:function(){
            let info = this.rain;
            if(info==0){
                statusText="맑음";
                rainIcon=rainIcon[1];
            }else{
                if(info==1){
                    statusText='비옴';
                    rainIcon=rainIcon[0];
                }else if(info==2){
                    statusText='비/눈';
                    rainIcon=rainIcon[2];
                }else{
                    statusText='모지';
                rainIcon=rainIcon[3];}
            }

        },
        temperature:datas[3].obsrValue,
        wind:datas[5].obsrValue,
        nx:datas[0].nx,
        ny:datas[0].ny,
        loc:function(){
            let point=[this.nx,this.ny];
            console.log(point);
            if(point[0]==65 && point[1]==110){
                locText="충남/천안"
            }
        }
    }
    cast.rainInfo();
    cast.loc();
    castp.innerHTML=`
        <span>오늘날짜 : ${cast.baseDate}</span>
        <span>지역 : 서울/강남</span>
        <span>강수형태 : ${statusText}${rainIcon} </span>
        <span>기온 : ${cast.temperature}℃</span>
        <span>바람 : ${cast.wind}/ms</span>
    `
    castCon.appendChild(castp);
};