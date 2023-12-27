"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const auth_module_1 = require("./modules/auth/auth.module");
const class_module_1 = require("./modules/class/class.module");
const employee_module_1 = require("./modules/employee/employee.module");
const grade_module_1 = require("./modules/grade/grade.module");
const gradebook_module_1 = require("./modules/gradebook/gradebook.module");
const lesson_module_1 = require("./modules/lesson/lesson.module");
const level_module_1 = require("./modules/level/level.module");
const room_module_1 = require("./modules/room/room.module");
const schoolyear_module_1 = require("./modules/schoolyear/schoolyear.module");
const student_module_1 = require("./modules/student/student.module");
const subject_module_1 = require("./modules/subject/subject.module");
const teacher_module_1 = require("./modules/teacher/teacher.module");
const test_module_1 = require("./modules/test/test.module");
const timetable_module_1 = require("./modules/timetable/timetable.module");
exports.AppRoutes = [
    {
        path: 'auth',
        module: auth_module_1.AuthModule,
    },
    {
        path: 'level',
        module: level_module_1.LevelModule,
    },
    {
        path: 'grade',
        module: grade_module_1.GradeModule,
    },
    {
        path: 'class',
        module: class_module_1.ClassModule,
    },
    {
        path: 'student',
        module: student_module_1.CustomerModule,
    },
    {
        path: 'teacher',
        module: teacher_module_1.TeacherModule,
    },
    {
        path: 'subject',
        module: subject_module_1.SubjectModule,
    },
    {
        path: 'employee',
        module: employee_module_1.EmployeeModule,
    },
    {
        path: 'lesson',
        module: lesson_module_1.LessonModule,
    },
    {
        path: 'timetable',
        module: timetable_module_1.TimeTableModule,
    },
    {
        path: 'schoolyear',
        module: schoolyear_module_1.SchoolYearModule,
    },
    {
        path: 'test',
        module: test_module_1.TestModule,
    },
    {
        path: 'gradebook',
        module: gradebook_module_1.GradebookModule,
    },
    {
        path: 'room',
        module: room_module_1.RoomModule,
    },
];
//# sourceMappingURL=app.router.js.map