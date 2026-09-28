/**
 * Dữ liệu mẫu minh họa cho môn Hóa học THPT
 * Thầy giáo: Lục Văn Quang - Trường THPT Trần Phú A
 * Dữ liệu được lưu trữ trực tiếp trên thiết bị (LocalStorage) và có thể chỉnh sửa/khôi phục linh hoạt.
 */

import { AppData, ClassItem, Student, Lesson, LearningTask, GradeEntry, StudentComment, ActivityLog, TeacherProfile } from '../types';

export const defaultTeacherProfile: TeacherProfile = {
  teacherName: 'Thầy Lục Văn Quang',
  subject: 'Hóa học',
  schoolName: 'THPT Trần Phú A',
};

export const initialClasses: ClassItem[] = [
  {
    id: 'c-10a1',
    name: '10A1',
    gradeLevel: 10,
    room: 'Phòng 301',
    academicYear: '2025-2026',
    note: 'Lớp chọn tự nhiên, học sinh tích cực và say mê học môn Hóa học'
  },
  {
    id: 'c-10a2',
    name: '10A2',
    gradeLevel: 10,
    room: 'Phòng 302',
    academicYear: '2025-2026',
    note: 'Lớp sôi nổi, cần chú trọng rèn kỹ năng cân bằng phản ứng oxi hóa - khử'
  },
  {
    id: 'c-11a1',
    name: '11A1',
    gradeLevel: 11,
    room: 'Phòng 401',
    academicYear: '2025-2026',
    note: 'Tập trung chuyên sâu về cân bằng hóa học và dung dịch điện ly'
  },
  {
    id: 'c-12a1',
    name: '12A1',
    gradeLevel: 12,
    room: 'Phòng 502',
    academicYear: '2025-2026',
    note: 'Lớp cuối cấp định hướng khối A/B, kiến thức este - lipit và kim loại vững'
  }
];

export const initialStudents: Student[] = [
  // Lớp 10A1
  { id: 's-1001', studentCode: 'HS1001', fullName: 'Nguyễn Hoàng Nam', classId: 'c-10a1', gender: 'Nam', status: 'Đang học', note: 'Nắm chắc kiến thức nguyên tử, phát biểu tích cực' },
  { id: 's-1002', studentCode: 'HS1002', fullName: 'Trần Thị Mai Anh', classId: 'c-10a1', gender: 'Nữ', status: 'Đang học', note: 'Viết cấu hình electron chuẩn xác, bài làm cẩn thận' },
  { id: 's-1003', studentCode: 'HS1003', fullName: 'Lê Minh Đức', classId: 'c-10a1', gender: 'Nam', status: 'Đang học', note: 'Cần củng cố kỹ năng xác định số oxi hóa', needAttention: true },
  { id: 's-1004', studentCode: 'HS1004', fullName: 'Phạm Thuỳ Linh', classId: 'c-10a1', gender: 'Nữ', status: 'Đang học', note: 'Kỹ năng làm thí nghiệm an toàn và khéo léo' },
  { id: 's-1005', studentCode: 'HS1005', fullName: 'Đỗ Quang Huy', classId: 'c-10a1', gender: 'Nam', status: 'Đang học', note: 'Cần nộp phiếu bài tập đúng thời hạn', needAttention: true },
  { id: 's-1006', studentCode: 'HS1006', fullName: 'Vũ Ngọc Bảo Trâm', classId: 'c-10a1', gender: 'Nữ', status: 'Đang học', note: 'Giải bài tập trắc nghiệm bảng tuần hoàn nhanh và chính xác' },

  // Lớp 10A2
  { id: 's-1021', studentCode: 'HS1021', fullName: 'Hoàng Quốc Tuấn', classId: 'c-10a2', gender: 'Nam', status: 'Đang học', note: 'Hiểu bản chất liên kết ion và cộng hóa trị' },
  { id: 's-1022', studentCode: 'HS1022', fullName: 'Bùi Thanh Hằng', classId: 'c-10a2', gender: 'Nữ', status: 'Đang học', note: 'Chăm chỉ ghi chép, tích cực thảo luận nhóm' },
  { id: 's-1023', studentCode: 'HS1023', fullName: 'Nguyễn Đình Phúc', classId: 'c-10a2', gender: 'Nam', status: 'Đang học', note: 'Còn nhầm lẫn số electron độc thân', needAttention: true },
  { id: 's-1024', studentCode: 'HS1024', fullName: 'Đặng Ngọc Ánh', classId: 'c-10a2', gender: 'Nữ', status: 'Đang học', note: 'Thao tác sử dụng ống nghiệm và cân điện tử rất tốt' },
  { id: 's-1025', studentCode: 'HS1025', fullName: 'Phan Trọng Khang', classId: 'c-10a2', gender: 'Nam', status: 'Đang học', note: 'Yêu thích các hiện tượng phản ứng hóa học kỳ thú' },

  // Lớp 11A1
  { id: 's-1101', studentCode: 'HS1101', fullName: 'Trịnh Gia Bảo', classId: 'c-11a1', gender: 'Nam', status: 'Đang học', note: 'Tính toán pH và nồng độ mol rất thành thạo' },
  { id: 's-1102', studentCode: 'HS1102', fullName: 'Ngô Thảo My', classId: 'c-11a1', gender: 'Nữ', status: 'Đang học', note: 'Trình bày phương trình phản ứng trao đổi ion rõ ràng' },
  { id: 's-1103', studentCode: 'HS1103', fullName: 'Võ Minh Quân', classId: 'c-11a1', gender: 'Nam', status: 'Đang học', note: 'Cần chú ý nguyên lý chuyển dịch cân bằng Le Chatelier' },
  { id: 's-1104', studentCode: 'HS1104', fullName: 'Lý Diệu Anh', classId: 'c-11a1', gender: 'Nữ', status: 'Đang học', note: 'Học lực xuất sắc, đội tuyển học sinh giỏi Hóa' },
  { id: 's-1105', studentCode: 'HS1105', fullName: 'Hồ Tuấn Kiệt', classId: 'c-11a1', gender: 'Nam', status: 'Đang học', note: 'Có tiến bộ vượt bậc ở bài kiểm tra axit - bazơ' },

  // Lớp 12A1
  { id: 's-1201', studentCode: 'HS1201', fullName: 'Dương Khánh Linh', classId: 'c-12a1', gender: 'Nữ', status: 'Đang học', note: 'Nắm vững lý thuyết Este - Lipit và hóa học hữu cơ' },
  { id: 's-1202', studentCode: 'HS1202', fullName: 'Vũ Đức Thịnh', classId: 'c-12a1', gender: 'Nam', status: 'Đang học', note: 'Cần rèn thêm kỹ năng bảo toàn khối lượng và electron', needAttention: true },
  { id: 's-1203', studentCode: 'HS1203', fullName: 'Trần Bích Phương', classId: 'c-12a1', gender: 'Nữ', status: 'Đang học', note: 'Giải bài tập kim loại tác dụng với axit nitric rất chắc' },
  { id: 's-1204', studentCode: 'HS1204', fullName: 'Lê Hoàng Long', classId: 'c-12a1', gender: 'Nam', status: 'Đang học', note: 'Tư duy giải toán hóa học nhanh, năng nổ sửa bài' },
  { id: 's-1205', studentCode: 'HS1205', fullName: 'Nguyễn Ngọc Yến', classId: 'c-12a1', gender: 'Nữ', status: 'Đang học', note: 'Vở ghi chép công thức và sơ đồ tư duy Hóa rất đẹp' }
];

export const initialLessons: Lesson[] = [
  {
    id: 'l-01',
    title: 'Thành phần nguyên tử và cấu tạo vỏ nguyên tử',
    classId: 'c-10a1',
    topic: 'Chương 1: Cấu tạo nguyên tử',
    objectives: 'Xác định số hạt p, n, e, khối lượng và kích thước nguyên tử; viết cấu hình electron của 20 nguyên tố đầu tiên.',
    summary: 'Phân biệt obitan nguyên tử s, p, d; vận dụng nguyên lý Pauli, vững bền và quy tắc Hund.',
    teachDate: '2026-09-18',
    status: 'Đang dạy'
  },
  {
    id: 'l-02',
    title: 'Bảng tuần hoàn các nguyên tố hóa học & Định luật tuần hoàn',
    classId: 'c-10a1',
    topic: 'Chương 2: Bảng tuần hoàn',
    objectives: 'Xác định vị trí ô nguyên tố, chu kỳ, nhóm (A, B) dựa trên cấu hình e; nắm quy luật biến đổi bán kính và độ âm điện.',
    summary: 'Luyện tập tra cứu bảng tuần hoàn và so sánh tính kim loại, phi kim của các nguyên tố lân cận.',
    teachDate: '2026-09-22',
    status: 'Chưa dạy'
  },
  {
    id: 'l-03',
    title: 'Phản ứng Oxi hóa - Khử và phương pháp thăng bằng electron',
    classId: 'c-10a2',
    topic: 'Chương 4: Phản ứng Oxi hóa - Khử',
    objectives: 'Nhận diện chất khử, chất oxi hóa, quá trình oxi hóa và quá trình khử; cân bằng đúng các phản ứng phức tạp.',
    summary: 'Quy trình 4 bước thăng bằng electron và bài tập cân bằng phản ứng có môi trường axit/bazơ.',
    teachDate: '2026-09-17',
    status: 'Đã hoàn thành'
  },
  {
    id: 'l-04',
    title: 'Khái niệm về cân bằng hóa học & Chuyển dịch cân bằng',
    classId: 'c-11a1',
    topic: 'Chương 1: Cân bằng hóa học',
    objectives: 'Hiểu bản chất cân bằng động; vận dụng nguyên lý Le Chatelier dự đoán chiều chuyển dịch khi thay đổi nồng độ, áp suất, nhiệt độ.',
    summary: 'Khảo sát các phản ứng thuận nghịch tổng hợp NH3 và SO3 trong thực tế công nghiệp.',
    teachDate: '2026-09-19',
    status: 'Đang dạy'
  },
  {
    id: 'l-05',
    title: 'Thuyết Acid - Base theo Bronsted - Lowry và pH dung dịch',
    classId: 'c-11a1',
    topic: 'Chương 1: Sự điện li & Cân bằng trong dung dịch',
    objectives: 'Phân loại acid, base theo quan điểm cho - nhận proton H+; tính toán nồng độ ion [H+] và chỉ số pH.',
    summary: 'Sử dụng giấy chỉ thị màu vạn năng và máy đo pH trong phòng thí nghiệm trường THPT.',
    teachDate: '2026-09-25',
    status: 'Chưa dạy'
  },
  {
    id: 'l-06',
    title: 'Este và Lipit: Cấu tạo phân tử, danh pháp và phản ứng xà phòng hóa',
    classId: 'c-12a1',
    topic: 'Chương 1: Este - Lipit',
    objectives: 'Viết công thức cấu tạo các đồng phân este C4H8O2; gọi tên gốc chức IUPAC; tính toán khối lượng xà phòng thu được.',
    summary: 'Khảo sát tính chất este thơm, este đơn chức và phản ứng thủy phân trong môi trường kiềm (xà phòng hóa).',
    teachDate: '2026-09-16',
    status: 'Đã hoàn thành'
  },
  {
    id: 'l-07',
    title: 'Thực hành thí nghiệm: Điều chế và thử tính chất của Este & Kim loại',
    classId: 'c-12a1',
    topic: 'Chuyên đề thực hành Hóa học 12',
    objectives: 'Rèn luyện thao tác lắp đặt dụng cụ đun cách thủy điều chế etyl axetat; quan sát hiện tượng tách lớp và mùi thơm đặc trưng.',
    summary: 'Quy tắc an toàn khi sử dụng axit sunfuric đặc (H2SO4) và cồn tuyệt đối trong phòng thí nghiệm.',
    teachDate: '2026-09-20',
    status: 'Đang dạy'
  }
];

export const initialTasks: LearningTask[] = [
  {
    id: 't-01',
    title: 'Cân bằng 5 phản ứng Oxi hóa - Khử bằng thăng bằng electron',
    classId: 'c-10a1',
    lessonId: 'l-01',
    description: 'Xác định số oxi hóa trước sau phản ứng, viết các quá trình cho - nhận electron và đặt hệ số.',
    dueDate: '2026-09-19',
    priority: 'Quan trọng',
    status: 'Đang thực hiện',
    completedStudentIds: ['s-1001', 's-1002', 's-1004', 's-1006']
  },
  {
    id: 't-02',
    title: 'Viết cấu hình electron các nguyên tố từ Z = 11 đến Z = 20',
    classId: 'c-10a1',
    lessonId: 'l-01',
    description: 'Chỉ rõ số e lớp ngoài cùng, xác định tính kim loại hay phi kim tương ứng của từng nguyên tố.',
    dueDate: '2026-09-20',
    priority: 'Bình thường',
    status: 'Đã giao',
    completedStudentIds: ['s-1002', 's-1004']
  },
  {
    id: 't-03',
    title: 'Tính pH của dung dịch HCl 0.01M và Ba(OH)2 0.005M',
    classId: 'c-11a1',
    lessonId: 'l-04',
    description: 'Trình bày các bước phân li hoàn toàn, tính nồng độ ion H+ và OH-, sau đó suy ra giá trị pH tương ứng.',
    dueDate: '2026-09-19',
    priority: 'Quan trọng',
    status: 'Đang thực hiện',
    completedStudentIds: ['s-1101', 's-1102', 's-1104', 's-1105']
  },
  {
    id: 't-04',
    title: 'Viết các đồng phân Este đơn chức mạch hở của C4H8O2',
    classId: 'c-12a1',
    lessonId: 'l-06',
    description: 'Gọi tên danh pháp thay thế của từng đồng phân và viết phản ứng thủy phân với NaOH đun nóng.',
    dueDate: '2026-09-21',
    priority: 'Khẩn cấp',
    status: 'Đã giao',
    completedStudentIds: ['s-1201', 's-1203', 's-1204']
  },
  {
    id: 't-05',
    title: 'Hoàn thành phiếu thu hoạch thí nghiệm điều chế Etyl axetat',
    classId: 'c-12a1',
    lessonId: 'l-07',
    description: 'Ghi lại hiện tượng màu sắc, sự phân lớp chất lỏng, mùi hương chuối chín và viết phương trình este hóa có xúc tác H2SO4 đặc.',
    dueDate: '2026-09-18',
    priority: 'Quan trọng',
    status: 'Đã hoàn thành',
    completedStudentIds: ['s-1201', 's-1202', 's-1203', 's-1204', 's-1205']
  },
  {
    id: 't-06',
    title: 'Đọc trước bài Lý thuyết Kim loại kiềm & Kiềm thổ trang 78 SGK',
    classId: 'c-12a1',
    lessonId: 'l-07',
    description: 'Ghi chú các tính chất vật lý đặc biệt (nhiệt độ nóng chảy thấp, độ cứng nhỏ) để trao đổi trong giờ học sau.',
    dueDate: '2026-09-24',
    priority: 'Bình thường',
    status: 'Chưa giao',
    completedStudentIds: []
  }
];

export const initialGrades: GradeEntry[] = [
  // Lớp 10A1
  { id: 'g-01', studentId: 's-1001', classId: 'c-10a1', activityTitle: 'Kiểm tra 15 phút: Cấu tạo vỏ nguyên tử', score: 8.5, date: '2026-09-15', note: 'Viết cấu hình đúng, tính số electron chính xác' },
  { id: 'g-02', studentId: 's-1002', classId: 'c-10a1', activityTitle: 'Kiểm tra 15 phút: Cấu tạo vỏ nguyên tử', score: 9.5, date: '2026-09-15', note: 'Bài làm xuất sắc, sạch đẹp và tư duy rõ ràng' },
  { id: 'g-03', studentId: 's-1003', classId: 'c-10a1', activityTitle: 'Kiểm tra 15 phút: Cấu tạo vỏ nguyên tử', score: 6.0, date: '2026-09-15', note: 'Nhầm lẫn thứ tự mức năng lượng phân lớp 3d và 4s' },
  { id: 'g-04', studentId: 's-1004', classId: 'c-10a1', activityTitle: 'Kiểm tra 15 phút: Cấu tạo vỏ nguyên tử', score: 8.0, date: '2026-09-15', note: 'Nắm chắc kiến thức hạt p, n, e' },
  { id: 'g-05', studentId: 's-1005', classId: 'c-10a1', activityTitle: 'Kiểm tra 15 phút: Cấu tạo vỏ nguyên tử', score: 5.5, date: '2026-09-15', note: 'Cần ôn lại quy tắc điền electron vào obitan' },
  { id: 'g-06', studentId: 's-1006', classId: 'c-10a1', activityTitle: 'Kiểm tra 15 phút: Cấu tạo vỏ nguyên tử', score: 9.0, date: '2026-09-15', note: 'Hiểu sâu bản chất các lớp electron' },

  // Lớp 10A2
  { id: 'g-07', studentId: 's-1021', classId: 'c-10a2', activityTitle: 'Kiểm tra phản ứng Oxi hóa - Khử', score: 8.0, date: '2026-09-14', note: 'Cân bằng đúng phản ứng Cu + HNO3 loãng' },
  { id: 'g-08', studentId: 's-1022', classId: 'c-10a2', activityTitle: 'Kiểm tra phản ứng Oxi hóa - Khử', score: 8.5, date: '2026-09-14', note: 'Xác định chất khử và chất oxi hóa chuẩn xác' },
  { id: 'g-09', studentId: 's-1023', classId: 'c-10a2', activityTitle: 'Kiểm tra phản ứng Oxi hóa - Khử', score: 6.0, date: '2026-09-14', note: 'Tính số oxi hóa của Nito trong ion nitrat còn sai' },
  { id: 'g-10', studentId: 's-1024', classId: 'c-10a2', activityTitle: 'Kiểm tra phản ứng Oxi hóa - Khử', score: 9.0, date: '2026-09-14', note: 'Hoàn thành bài kiểm tra nhanh nhất lớp' },
  { id: 'g-11', studentId: 's-1025', classId: 'c-10a2', activityTitle: 'Kiểm tra phản ứng Oxi hóa - Khử', score: 7.5, date: '2026-09-14', note: 'Bài làm đầy đủ các bước cân bằng' },

  // Lớp 11A1
  { id: 'g-12', studentId: 's-1101', classId: 'c-11a1', activityTitle: 'Bài tập pH & Cân bằng hóa học', score: 8.5, date: '2026-09-16', note: 'Công thức tính pH vận dụng linh hoạt' },
  { id: 'g-13', studentId: 's-1102', classId: 'c-11a1', activityTitle: 'Bài tập pH & Cân bằng hóa học', score: 8.5, date: '2026-09-16', note: 'Giải thích chuyển dịch cân bằng rất thuyết phục' },
  { id: 'g-14', studentId: 's-1103', classId: 'c-11a1', activityTitle: 'Bài tập pH & Cân bằng hóa học', score: 7.0, date: '2026-09-16', note: 'Cần chú ý đơn vị nồng độ mol' },
  { id: 'g-15', studentId: 's-1104', classId: 'c-11a1', activityTitle: 'Bài tập pH & Cân bằng hóa học', score: 9.5, date: '2026-09-16', note: 'Đạt điểm tuyệt đối phần câu hỏi tự luận nâng cao' },
  { id: 'g-16', studentId: 's-1105', classId: 'c-11a1', activityTitle: 'Bài tập pH & Cân bằng hóa học', score: 7.5, date: '2026-09-16', note: 'Có nhiều tiến bộ ở dạng bài axit mạnh - bazo mạnh' },

  // Lớp 12A1
  { id: 'g-17', studentId: 's-1201', classId: 'c-12a1', activityTitle: 'Kiểm tra 1 tiết: Este - Lipit & Xà phòng', score: 9.5, date: '2026-09-17', note: 'Nắm chắc kiến thức este no đơn chức và chất béo' },
  { id: 'g-18', studentId: 's-1202', classId: 'c-12a1', activityTitle: 'Kiểm tra 1 tiết: Este - Lipit & Xà phòng', score: 6.5, date: '2026-09-17', note: 'Chưa nhớ công thức triolein và tristearin' },
  { id: 'g-19', studentId: 's-1203', classId: 'c-12a1', activityTitle: 'Kiểm tra 1 tiết: Este - Lipit & Xà phòng', score: 9.0, date: '2026-09-17', note: 'Bài toán thủy phân este tính toán rất nhanh' },
  { id: 'g-20', studentId: 's-1204', classId: 'c-12a1', activityTitle: 'Kiểm tra 1 tiết: Este - Lipit & Xà phòng', score: 8.5, date: '2026-09-17', note: 'Viết đúng sản phẩm phản ứng tráng bạc của fomic' },
  { id: 'g-21', studentId: 's-1205', classId: 'c-12a1', activityTitle: 'Kiểm tra 1 tiết: Este - Lipit & Xà phòng', score: 8.5, date: '2026-09-17', note: 'Trình bày sạch sẽ, đạt chuẩn yêu cầu kỳ thi THPT' }
];

export const initialComments: StudentComment[] = [
  {
    id: 'cm-01',
    studentId: 's-1001',
    classId: 'c-10a1',
    date: '2026-09-16',
    content: 'Hiểu bài nhanh, phát biểu xây dựng bài sôi nổi trong các tiết học về mô hình nguyên tử Rutherford - Bohr.',
    skillCategory: 'Lý thuyết & Khái niệm',
    note: 'Đề xuất cử làm trưởng nhóm học tập bộ môn Hóa'
  },
  {
    id: 'cm-02',
    studentId: 's-1003',
    classId: 'c-10a1',
    date: '2026-09-17',
    content: 'Em còn chậm khi cân bằng electron và tính số mol. Cần luyện thêm bài tập cơ bản ở nhà.',
    skillCategory: 'Bài tập & Tính toán',
    note: 'Thầy đã gửi thêm phiếu hướng dẫn phương pháp thăng bằng electron từng bước'
  },
  {
    id: 'cm-03',
    studentId: 's-1004',
    classId: 'c-10a1',
    date: '2026-09-15',
    content: 'Thực hành thí nghiệm rất nghiêm túc, tuân thủ nguyên tắc an toàn hóa chất phòng thí nghiệm trường THPT.',
    skillCategory: 'Thực hành & Thí nghiệm',
    note: 'Khen ngợi trước lớp về tác phong khoa học'
  },
  {
    id: 'cm-04',
    studentId: 's-1104',
    classId: 'c-11a1',
    date: '2026-09-16',
    content: 'Tư duy Hóa học rất sắc sảo, giải quyết các câu hỏi về chuyển dịch cân bằng và hằng số Kc rất chuẩn xác.',
    skillCategory: 'Bài tập & Tính toán',
    note: 'Khuyến khích bồi dưỡng thi học sinh giỏi cấp tỉnh'
  },
  {
    id: 'cm-05',
    studentId: 's-1202',
    classId: 'c-12a1',
    date: '2026-09-17',
    content: 'Cần chú ý học thuộc tên thông thường và gốc axit của các chất béo no, không no để không mất điểm trắc nghiệm.',
    skillCategory: 'Lý thuyết & Khái niệm',
    note: 'Đã dặn dò ôn lại bảng tóm tắt este - lipit trong giờ truy bài'
  }
];

export const initialActivityLogs: ActivityLog[] = [
  { id: 'act-01', timestamp: new Date(Date.now() - 1000 * 60 * 35).toISOString(), type: 'grade', action: 'Đã cập nhật điểm bài "Kiểm tra 1 tiết Este - Lipit" lớp 12A1' },
  { id: 'act-02', timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString(), type: 'task', action: 'Đã giao bài tập mới: "Cân bằng phản ứng Oxi hóa - Khử" cho lớp 10A1' },
  { id: 'act-03', timestamp: new Date(Date.now() - 1000 * 60 * 240).toISOString(), type: 'lesson', action: 'Đã cập nhật trạng thái bài học "Thành phần nguyên tử" lớp 10A1 sang "Đang dạy"' },
  { id: 'act-04', timestamp: new Date(Date.now() - 1000 * 60 * 360).toISOString(), type: 'comment', action: 'Đã thêm nhận xét thao tác thí nghiệm cho học sinh Phạm Thuỳ Linh' },
  { id: 'act-05', timestamp: new Date(Date.now() - 1000 * 60 * 500).toISOString(), type: 'student', action: 'Đã cập nhật danh sách lớp và học sinh THPT Trần Phú A' }
];

export const initialAppData: AppData = {
  teacherProfile: defaultTeacherProfile,
  classes: initialClasses,
  students: initialStudents,
  lessons: initialLessons,
  tasks: initialTasks,
  grades: initialGrades,
  comments: initialComments,
  activityLogs: initialActivityLogs,
  soundEnabled: false
};
