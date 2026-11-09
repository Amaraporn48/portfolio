// ข้อมูลส่วนตัว — แก้ไขที่ไฟล์นี้ไฟล์เดียว
// PDF ต้นฉบับไม่มีข้อมูลติดต่อ จึงเว้นว่างไว้ (ช่องที่เว้นว่างจะไม่แสดงบนหน้าเว็บ)
export const profile = {
  nameTh: 'อมราพร สืบวงษ์ชัย',
  nameEn: 'Amaraporn Suebwongchai',
  tagline: 'กลยุทธ์การตลาด · การวิเคราะห์ข้อมูล · การสร้างเว็บไซต์',
  intro:
    'ผลงานที่ผสานการวิเคราะห์ตลาดอย่างเป็นระบบ เข้ากับการนำเสนอและการลงมือสร้างจริง ตั้งแต่การออกแบบกลยุทธ์แบรนด์ การพยากรณ์ด้วยข้อมูล ไปจนถึงการสร้างเว็บไซต์',
  photo: '/images/portrait.jpg',
  contact: {
    email: 'suepwongchai@gmail.com',
    phone: '080-053-9005',
    line: '',
    instagram: '',
    linkedin: '',
  },
}

export const skills = [
  {
    title: 'กลยุทธ์การตลาด',
    items: ['PEST Analysis', "Porter's Five Forces", '6Ws & 1H', 'SWOT Analysis', 'STP', 'ส่วนประสมทางการตลาด (4Ps)'],
  },
  {
    title: 'การวิเคราะห์ข้อมูล',
    items: ['Minitab', 'Time Series Analysis', 'Trend Analysis', 'Decomposition', "Winter's Method"],
  },
  {
    title: 'เว็บไซต์และดิจิทัล',
    items: ['WordPress', 'HTML', 'การปรับแต่งเทมเพลต', 'ระบบแชทบอท'],
  },
  {
    title: 'การนำเสนอและการทำงานเป็นทีม',
    items: ['Pitch Presentation', 'การวิเคราะห์ Pain Point', 'การสื่อสารกับผู้เกี่ยวข้อง'],
  },
]

export const process = [
  { no: '01', title: 'วิเคราะห์', text: 'เริ่มจากสภาพแวดล้อมทางธุรกิจ คู่แข่ง และกลุ่มเป้าหมายด้วยเครื่องมือทางการตลาด' },
  { no: '02', title: 'วางกลยุทธ์', text: 'แปลงข้อมูลเป็น STP และส่วนประสมทางการตลาดที่นำไปใช้ได้จริง' },
  { no: '03', title: 'ลงมือสร้าง', text: 'ต่อยอดเป็นเว็บไซต์ สื่อ และแผนธุรกิจที่ใช้งานง่ายและสวยงาม' },
  { no: '04', title: 'นำเสนอ', text: 'สื่อสารผลลัพธ์และทิศทางแบรนด์ในรูปแบบ Pitch Presentation' },
]
