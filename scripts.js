let currentQuestion = 1;
let wrongAttempts = 0;
const correctAnswers = {
    1: "กะเพราหมูกรอบ",
    2: "ลิเวอร์พูลแพ้",
    3: "Tim mansion",
    4: "ไก่ผัดพริกเกลือ",
    5: "21/06/66"
};

function selectAnswer(questionNumber, selectedAnswer) {
    const feedback = document.getElementById(`feedback-${questionNumber}`);

    if (selectedAnswer === correctAnswers[questionNumber]) {
        feedback.textContent = "✅ ถูกต้อง! ไปข้อถัดไป";
        feedback.style.color = "green";
        wrongAttempts = 0; // รีเซ็ตจำนวนครั้งที่ตอบผิด

        setTimeout(() => {
            document.getElementById(`question-${questionNumber}`).classList.add("hidden");
            if (questionNumber < 5) {
                currentQuestion++;
                document.getElementById(`question-${currentQuestion}`).classList.remove("hidden");
            } else {
                window.location.href = "img.html"; // ไปหน้าสุดท้าย
            }
        }, 1000);
    } else {
        wrongAttempts++;
        feedback.textContent = `❌ ผิด! ลองอีกครั้ง (ผิด ${wrongAttempts}/2 ครั้ง)`;
        feedback.style.color = "red";

        if (wrongAttempts >= 2) {
            setTimeout(() => {
                alert("คุณตอบผิดเกิน 2 ครั้ง! เริ่มต้นใหม่ตั้งแต่ข้อแรก");
                location.reload(); // รีโหลดหน้าเพื่อเริ่มใหม่
            }, 1000);
        }
    }
}
document.addEventListener("DOMContentLoaded", function() {
 // กำหนดรูปภาพและข้อความที่จะเปลี่ยนไปตามลำดับ
 const images = [
  { src: 'V1/I1.jpg', text: 'This is the first surprise! 💖' },
  { src: 'V1 /I2.jpg', text: 'แต่สิ่งนี้คือของขวัญที่เค้าทำให้เบ้บนะ' },
  { src: 'V1 /I3.jpg', text: 'ราคาอาจไม่ได้แพงแต่เค้าตั้งใจทำให้เบ้บนะ เค้ารักเบ้บ' }
];

let currentIndex = 0; // เริ่มต้นที่รูปแรก

function nextImage() {
  currentIndex++; // เพิ่มค่า index เพื่อนำไปแสดงรูปถัดไป
  if (currentIndex < images.length) {
    // เปลี่ยนรูปภาพและข้อความ
    document.getElementById('surprise-image').src = images[currentIndex].src;
    document.getElementById('surprise-text').textContent = images[currentIndex].text;
  } else {
    // เมื่อถึงรูปสุดท้าย เปลี่ยนปุ่มเป็น "Next Page"
    document.getElementById('next-button').textContent = 'Next Page';
    document.getElementById('next-button').onclick = function() {
      window.location.href = 'babe.html'; // ไปยังหน้า babe.html
    };
  }
}

  window.nextImage = nextImage;  // ทำให้ฟังก์ชันสามารถเรียกใช้ได้จาก HTML
});