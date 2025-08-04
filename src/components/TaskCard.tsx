// กำหนดประเภทของ props ที่ component จะรับเข้ามา
interface TaskCardProps {
  id: string;
  title: string;
  description: string;
  isDone: boolean;
  deleteTaskFunc: (taskId: string) => void;
  toggleDoneTaskFunc: (taskId: string) => void;
}

// สร้าง Functional Component สำหรับแสดง Task รายการเดียว
export default function TaskCard({
  id,
  title,
  description,
  isDone,
  deleteTaskFunc,
  toggleDoneTaskFunc,
}: TaskCardProps) {
  // เมื่อผู้ใช้คลิกปุ่ม Delete → เรียกฟังก์ชันจาก props
  const deleteBtnOnClick = () => {
    deleteTaskFunc(id);
  };

  // เมื่อผู้ใช้คลิกปุ่ม Done → เรียก toggle สถานะเสร็จ/ไม่เสร็จ
  const toggleDoneBtnOnClick = () => {
    toggleDoneTaskFunc(id);
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="row align-items-center">
          {/* ส่วนแสดงหัวข้อ */}
          <div className="col-xs-12 col-sm-6 col-md-4">
            <h5
              className={
                isDone
                  ? "text-decoration-line-through card-title"
                  : "card-title"
              }
            >
              {title}
            </h5>
          </div>

          {/* ส่วนแสดงคำอธิบาย */}
          <div className="col-xs-12 col-sm-6 col-md-4">
            <p className="card-text">{description}</p>
          </div>

          {/* ปุ่ม Done */}
          <div className="col-6 col-sm-3 col-md-2 text-end">
            <button
              className="btn btn-success w-100 mb-2"
              onClick={toggleDoneBtnOnClick}
            >
              Done
            </button>
          </div>

          {/* ปุ่ม Delete */}
          <div className="col-6 col-sm-3 col-md-2 text-end">
            <button
              className="btn btn-danger w-100"
              onClick={deleteBtnOnClick}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
