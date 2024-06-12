const firebaseConfig = {
    apiKey: "AIzaSyBz9bUA8j90DdN2Kic-wfqyFmCLIB5zpkw",
    authDomain: "project--js.firebaseapp.com",
    databaseURL: "https://project--js-default-rtdb.firebaseio.com",
    projectId: "project--js",
    storageBucket: "project--js.appspot.com",
    messagingSenderId: "661119747006",
    appId: "1:661119747006:web:bb8132f679508060eaefef",
    measurementId: "G-KZZJQZS7G2"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// 파이어베이스 실시간 데이터베이스 생성
const database = firebase.database();

// 데이터 저장 실습
function writeUserData(userId, email, nick) {

    database.ref("users/" + userId).set({
        email: email,
        nick: nick
    });
}



// 데이터 읽기 실습
function readUserData() {
    database.ref("users/").on('value', (snapshot) => {
        // 실시간 데이터베이스 값 접근
        console.log(snapshot.val());

        let data = snapshot.val();
        let keys = Object.keys(data);

        //  ['email', 'jjs0601015', 'nick', 'smile']
        console.log(Object.keys(data));
        console.log(data["devil"]);
        console.log(data[keys[0]]);

        const result = document.getElementById("result");


        // 데이터베이스 웹 페이지 출력

        result.innerText = `${data[keys[0]].email} / ${data[keys[0]].nick}`;

        // 중복 확인1
        const readnmValue = document.getElementById("readnm").value;
        if (keys.includes(readnmValue)) {
            alert("존재하는 아이디입니다.")
        } else {
            alert("없는 아이디입니다.")
        }
        console.log(readnm);
    })
}

////////////////////////////////////////////////////////////////////////////////
const btn = document.frm.btn;
const readBtn = document.getElementById("readBtn");
const readID = document.getElementById("readID");
readBtn.addEventListener("click", () => {
    readUserData();
})

btn.addEventListener("click", (event) => {
    event.preventDefault();
    const id = document.frm.id.value;
    const email = document.frm.email.value;
    const nick = document.frm.nick.value;

    console.log(`ID : ${id}`);
    console.log(`Email : ${email}`);
    console.log(`Nickname : ${nick}`);
    writeUserData(id, email, nick);
})
