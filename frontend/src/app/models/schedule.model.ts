import { CreateModel } from "./base/create.model";

export class ScheduleModel {
    public get create(): Array<CreateModel> {
        return [
            {
                id: 'date',
                label: 'Ngày áp dụng',
                name: 'title',
                type: 'date'
            },
            {
                id: 'file',
                label: 'File',
                name: 'file',
                type: 'upload'
            }
        ];
    }

    public get createLesson(): Array<CreateModel> {
        return [
            {
                id: 'date',
                label: 'Ngày áp dụng',
                name: 'title',
                type: 'date',
            },
            {
                id: 'SubjectId',
                label: 'Môn học',
                name: 'SubjectId',
                type: 'selectChange',
                data: [],
                required: true,
            },
            {
                id: 'EmployeeId',
                label: 'Giáo viên',
                name: 'EmployeeId',
                type: 'selected',
                data: [],
                required: true,
            },
            {
                id: 'RoomId',
                label: 'Phòng học',
                name: 'RoomId',
                type: 'selected',
                data: [],
                required: true,
            },
            {
                id: 'workday',
                label: 'Thứ',
                name: 'workday',
                type: 'multiple',
                option: [
                    {
                        name: 'Thứ 2',
                        value: 2,
                        selected: false
                    },
                    {
                        name: 'Thứ 3',
                        value: 3,
                        selected: false
                    },
                    {
                        name: 'Thứ 4',
                        value: 4,
                        selected: false
                    },
                    {
                        name: 'Thứ 5',
                        value: 5,
                        selected: false
                    },
                    {
                        name: 'Thứ 6',
                        value: 6,
                        selected: false
                    },
                    {
                        name: 'Thứ 7',
                        value: 7,
                        selected: false
                    },
                ],
            },
            {
                id: 'lesson',
                label: 'Tiết học',
                name: 'lesson',
                type: 'multiple',
                option: [],
            }
        ];
    }

    public get editLesson(): Array<CreateModel> {
        return [
            {
                id: 'date',
                label: 'Ngày áp dụng',
                name: 'title',
                type: 'date',
            },
            {
                id: 'SubjectId',
                label: 'Môn học',
                name: 'SubjectId',
                type: 'selectChange',
                data: [],
                required: true,
            },
            {
                id: 'EmployeeId',
                label: 'Giáo viên',
                name: 'EmployeeId',
                type: 'selected',
                data: [],
                required: true,
            },
            {
                id: 'RoomId',
                label: 'Phòng học',
                name: 'RoomId',
                type: 'selected',
                data: [],
                required: true,
            },
        ];
    }

}