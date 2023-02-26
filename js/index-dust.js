const dustCon = document.querySelector("#dust");
let dustText = document.querySelector(".dust-text");
let dustColor = document.querySelector(".dust-color")

let dustUrl = 'https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty';
let parameter = {
    key : 'AveojOZ5ZNcfL29JQhWKdzFdcIOInK0reWkvwc%2B%2Bmzf5gGSgUoHNv24YP3jNGPiXAUqNyYSfpr2dtsynkZJOgg%3D%3D',
    returnType:'json',
    numOfRows : '100',
    pageNo : 1,
    sidoName : '충남',
    ver:'1.0'
}
dustUrl = `${dustUrl}?serviceKey=${parameter.key}&returnType=${parameter.returnType}&numOfRows=${parameter.numOfRows}&pageNo=${parameter.pageNo}&sidoName=${parameter.sidoName}&ver=${parameter.ver}`

async function getPosts(){
    const res = await fetch(dustUrl);
    const data = await res.json();
    return data;
}

setPosts();
async function setPosts(){
    const posts = await getPosts();
    const datas = posts.response.body.items;
    const result = datas[0].khaiGrade;
    if(result==1){
        dustText.textContent="좋음"
        dustColor.style.background="#33a1ff"
    }else if(result==2){
        dustText.textContent="보통"
        dustColor.style.background="#00c83c"
    }else if(result==3){
        dustText.textContent="나쁨"
        dustColor.style.background="#e9a16f"
    }else{dustText.textContent="매우나쁨"
    dustText.style.lineHeight="1.0em"
    dustColor.style.background="#e26666"}
    
};