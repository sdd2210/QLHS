import { AuthModule } from './modules/auth/auth.module';
import { ClassModule } from './modules/class/class.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { GradeModule } from './modules/grade/grade.module';
import { GradebookModule } from './modules/gradebook/gradebook.module';
import { LessonModule } from './modules/lesson/lesson.module';
import { LevelModule } from './modules/level/level.module';
import { RoomModule } from './modules/room/room.module';
import { SchoolYearModule } from './modules/schoolyear/schoolyear.module';
import { CustomerModule } from './modules/student/student.module';
import { SubjectModule } from './modules/subject/subject.module';
import { TeacherModule } from './modules/teacher/teacher.module';
import { TestModule } from './modules/test/test.module';
import { TimeTableModule } from './modules/timetable/timetable.module';

export const AppRoutes = [
  {
    path: 'auth',
    module: AuthModule,
  },
  {
    path: 'level',
    module: LevelModule,
  },
  {
    path: 'grade',
    module: GradeModule,
  },
  {
    path: 'class',
    module: ClassModule,
  },
  {
    path: 'student',
    module: CustomerModule,
  },
  {
    path: 'teacher',
    module: TeacherModule,
  },
  {
    path: 'subject',
    module: SubjectModule,
  },
  {
    path: 'employee',
    module: EmployeeModule,
  },
  {
    path: 'lesson',
    module: LessonModule,
  },
  {
    path: 'timetable',
    module: TimeTableModule,
  },
  {
    path: 'schoolyear',
    module: SchoolYearModule,
  },
  {
    path: 'test',
    module: TestModule,
  },
  {
    path: 'gradebook',
    module: GradebookModule,
  },
  {
    path: 'room',
    module: RoomModule,
  },
];
