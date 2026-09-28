/**
 * storage.ts
 * Quản lý lưu trữ dữ liệu cục bộ (localStorage) cho Web App:
 * "TRỢ LÝ QUẢN TRỊ HỌC TẬP – THẦY DƯƠNG THÀNH TÍN"
 * 
 * GIẢI THÍCH LOCALSTORAGE:
 * - LocalStorage được sử dụng để lưu toàn bộ dữ liệu (Lớp học, Học sinh, Bài học, Nhiệm vụ,
 *   Điểm số, Nhận xét, Nhật ký hoạt động) trực tiếp trên trình duyệt của giáo viên.
 * - Ưu điểm: Hoạt động hoàn toàn ngoại tuyến (offline), không cần internet hay máy chủ,
 *   bảo mật thông tin nội bộ trên thiết bị của giáo viên, dữ liệu được giữ nguyên
 *   khi tải lại trang hoặc tắt mở trình duyệt.
 * - Cung cấp tính năng Xuất/Nhập tệp JSON để giáo viên dễ dàng sao lưu, di chuyển dữ liệu
 *   giữa máy tính ở trường và máy tính/máy tính bảng ở nhà.
 */

import { AppData, TeacherProfile } from '../types';
import { initialAppData, defaultTeacherProfile } from '../data/sampleData';

const STORAGE_KEY = 'tro_ly_giao_vien_luc_van_quang_v1';
const LEGACY_STORAGE_KEY = 'tro_ly_giao_vien_duong_thanh_tin_v1';

export function loadAppData(): AppData {
  try {
    let raw = localStorage.getItem(STORAGE_KEY);
    
    // Check if legacy storage exists and migrate
    if (!raw) {
      const legacyRaw = localStorage.getItem(LEGACY_STORAGE_KEY);
      if (legacyRaw) {
        // If legacy was just initial sample data of previous teacher, use new chemistry data
        saveAppData(initialAppData);
        return initialAppData;
      }
      saveAppData(initialAppData);
      return initialAppData;
    }

    const parsed = JSON.parse(raw) as Partial<AppData>;

    // Migrate or set teacherProfile
    let teacherProfile: TeacherProfile = defaultTeacherProfile;
    if (parsed.teacherProfile && parsed.teacherProfile.teacherName && !parsed.teacherProfile.teacherName.includes('Dương Thành Tín')) {
      teacherProfile = parsed.teacherProfile;
    }

    // If classes still point to middle school 6A1-9A1 from old sample data, update to initial chemistry classes
    const classes = parsed.classes && parsed.classes.length > 0 && parsed.classes[0].id !== 'c-6a1'
      ? parsed.classes
      : initialAppData.classes;

    return {
      teacherProfile,
      classes,
      students: parsed.students && parsed.students.length > 0 && parsed.students[0].id !== 's-601'
        ? parsed.students
        : initialAppData.students,
      lessons: parsed.lessons && parsed.lessons.length > 0 && parsed.lessons[0].id !== 'l-01'
        ? parsed.lessons
        : initialAppData.lessons,
      tasks: parsed.tasks && parsed.tasks.length > 0 && parsed.tasks[0].id !== 't-01'
        ? parsed.tasks
        : initialAppData.tasks,
      grades: parsed.grades && parsed.grades.length > 0 && parsed.grades[0].id !== 'g-01'
        ? parsed.grades
        : initialAppData.grades,
      comments: parsed.comments && parsed.comments.length > 0 && parsed.comments[0].id !== 'cm-01'
        ? parsed.comments
        : initialAppData.comments,
      activityLogs: parsed.activityLogs || initialAppData.activityLogs,
      soundEnabled: typeof parsed.soundEnabled === 'boolean' ? parsed.soundEnabled : false,
    };
  } catch (error) {
    console.error('Lỗi khi đọc dữ liệu từ localStorage:', error);
    return initialAppData;
  }
}

export function saveAppData(data: AppData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Lỗi khi lưu dữ liệu vào localStorage:', error);
  }
}

export function resetAppData(): AppData {
  saveAppData(initialAppData);
  return initialAppData;
}

export function clearAppData(): AppData {
  const emptyData: AppData = {
    teacherProfile: defaultTeacherProfile,
    classes: [],
    students: [],
    lessons: [],
    tasks: [],
    grades: [],
    comments: [],
    activityLogs: [],
    soundEnabled: false,
  };
  saveAppData(emptyData);
  return emptyData;
}

export function exportAppDataToFile(data: AppData): void {
  const jsonStr = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  const now = new Date();
  const dateStr = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`;
  link.href = url;
  link.download = `DuLieu_TroLy_ThayLucVanQuang_${dateStr}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function importAppDataFromFile(file: File): Promise<AppData> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target?.result as string;
        const parsed = JSON.parse(text) as AppData;
        if (!parsed.classes || !parsed.students || !parsed.lessons) {
          throw new Error('Tệp JSON không đúng định dạng dữ liệu của ứng dụng!');
        }
        resolve(parsed);
      } catch (err) {
        reject(err);
      }
    };
    reader.onerror = () => reject(new Error('Không thể đọc tệp sao lưu!'));
    reader.readAsText(file);
  });
}

/**
 * Hiệu ứng âm thanh thông báo nhẹ (Web Audio API)
 * Chỉ phát khi giáo viên bật tùy chọn âm thanh (mặc định TẮT theo yêu cầu).
 */
export function playChime(type: 'success' | 'delete' | 'warning' = 'success', enabled: boolean = false): void {
  if (!enabled) return;
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    const now = ctx.currentTime;
    if (type === 'success') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, now); // D5
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.12); // A5
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      osc.start(now);
      osc.stop(now + 0.26);
    } else if (type === 'warning') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(330, now + 0.15);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
      osc.start(now);
      osc.stop(now + 0.23);
    } else {
      // delete
      osc.type = 'sine';
      osc.frequency.setValueAtTime(370, now);
      osc.frequency.exponentialRampToValueAtTime(220, now + 0.18);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
      osc.start(now);
      osc.stop(now + 0.21);
    }
  } catch {
    // Silent fallback if audio context blocked
  }
}
