
import { TranslationStrings, CollectionPoint } from './types';

export const OIL_RATE_THB = 15;

export const TRANSLATIONS: Record<'en' | 'th', TranslationStrings> = {
  en: {
    title: 'Old Oil',
    tagline: 'Turn your waste into wealth for a cleaner planet.',
    login: 'Log In',
    signUp: 'Sign Up',
    email: 'Email Address',
    password: 'Password',
    forgotPassword: 'Forgot Password?',
    donthaveAccount: "Don't have an account?",
    dashboard: 'Dashboard',
    logout: 'Log Out',
    mapTitle: 'Collection Points Nearby',
    calcTitle: 'Sell Your Oil',
    pickupTitle: 'Schedule a Pickup',
    amountLiters: 'Amount of Oil (Liters)',
    estimatedEarning: 'Estimated Total (฿)',
    confirmSale: 'Confirm Sale & Request Pickup',
    pickupDate: 'Choose Pick-up Day',
    address: 'Collection Address',
    addressPlaceholder: 'e.g., 123 Sukhumvit Soi 11, Bangkok',
    successMessage: 'Request confirmed! Our team will contact you shortly.',
    ratePerLiter: 'Rate: 15 THB per Liter',
    backToLogin: 'Back to Log In',
    creatingAccount: 'Create New Account'
  },
  th: {
    title: 'Old Oil (โอลด์ ออยล์)',
    tagline: 'เปลี่ยนน้ำมันใช้แล้วให้เป็นรายได้ เพื่อโลกที่สะอาดขึ้น',
    login: 'เข้าสู่ระบบ',
    signUp: 'ลงทะเบียน',
    email: 'อีเมล',
    password: 'รหัสผ่าน',
    forgotPassword: 'ลืมรหัสผ่าน?',
    donthaveAccount: 'ยังไม่มีบัญชีผู้ใช้?',
    dashboard: 'แผงควบคุม',
    logout: 'ออกจากระบบ',
    mapTitle: 'จุดรับซื้อน้ำมันใกล้คุณ',
    calcTitle: 'คำนวณราคาน้ำมัน',
    pickupTitle: 'นัดหมายการรับน้ำมัน',
    amountLiters: 'ปริมาณน้ำมัน (ลิตร)',
    estimatedEarning: 'ยอดรวมประมาณการ (฿)',
    confirmSale: 'ยืนยันการขายและนัดรับ',
    pickupDate: 'เลือกวันที่นัดรับ',
    address: 'ที่อยู่สำหรับการรับน้ำมัน',
    addressPlaceholder: 'เช่น 123 ซอยสุขุมวิท 11 กรุงเทพฯ',
    successMessage: 'ยืนยันรายการแล้ว! ทีมงานจะติดต่อคุณในเร็วๆ นี้',
    ratePerLiter: 'อัตรา: 15 บาท ต่อ ลิตร',
    backToLogin: 'กลับไปหน้าเข้าสู่ระบบ',
    creatingAccount: 'สร้างบัญชีใหม่'
  }
};

export const MOCK_COLLECTION_POINTS: CollectionPoint[] = [
  { id: 1, name: 'Siam Paragon Hub', lat: 13.7462, lng: 100.5347, type: 'hub' },
  { id: 2, name: 'Ari Eco-Point', lat: 13.7796, lng: 100.5452, type: 'partner' },
  { id: 3, name: 'Sukhumvit Station', lat: 13.7367, lng: 100.5604, type: 'partner' },
  { id: 4, name: 'Thong Lo Recycle Center', lat: 13.7341, lng: 100.5828, type: 'hub' },
];
