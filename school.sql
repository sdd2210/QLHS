/*
 Navicat Premium Data Transfer

 Source Server         : local
 Source Server Type    : MongoDB
 Source Server Version : 70002
 Source Host           : localhost:27017
 Source Schema         : school

 Target Server Type    : MongoDB
 Target Server Version : 70002
 File Encoding         : 65001

 Date: 26/12/2023 01:59:19
*/


// ----------------------------
// Collection structure for classes
// ----------------------------
db.getCollection("classes").drop();
db.createCollection("classes");

// ----------------------------
// Documents of classes
// ----------------------------
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048c2"),
    name: "5A1",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655e"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048c3"),
    name: "4A2",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655d"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048c4"),
    name: "4D1",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655d"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048c5"),
    name: "1A3",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655a"),
    "delete_at": ISODate("2023-12-14T17:30:51.233Z")
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048c6"),
    name: "1B",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655a"),
    "delete_at": ISODate("2023-12-14T17:30:55.589Z")
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048c7"),
    name: "2A1",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655b"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048c8"),
    name: "5E2",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655e"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048c9"),
    name: "4D4",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655d"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048ca"),
    name: "3C3",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655c"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048cb"),
    name: "3A1",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655c"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048cc"),
    name: "6A3",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655f"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048cd"),
    name: "1A2",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655a"),
    "delete_at": ISODate("2023-12-14T17:30:58.645Z")
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048ce"),
    name: "1A5",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655a"),
    "delete_at": ISODate("2023-12-14T17:31:01.632Z")
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048cf"),
    name: "2C1",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655b"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048d0"),
    name: "10A1",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006563"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048d1"),
    name: "6A1",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655f"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048d2"),
    name: "4C1",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655d"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048d3"),
    name: "M",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006556"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048d4"),
    name: "3A11",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655c"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048d5"),
    name: "M 2",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006556"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048d6"),
    name: "2A6",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655b"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048d7"),
    name: "4A6",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655d"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048d8"),
    name: "1A1",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655a"),
    "delete_at": ISODate("2023-12-14T17:31:17.912Z")
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048d9"),
    name: "2A3",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655b"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048da"),
    name: "4A5",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655d"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048db"),
    name: "3A4",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655c"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048dc"),
    name: "9A3",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006562"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048dd"),
    name: "10C1",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006563"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048de"),
    name: "9A1",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006562"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048df"),
    name: "6A2",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655f"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048e0"),
    name: "2A5",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655b"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048e1"),
    name: "11B1",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006564"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048e2"),
    name: "5A2",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655e"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048e3"),
    name: "8A1",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006561"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048e4"),
    name: "7A2",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006560"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048e5"),
    name: "8A3",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006561"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048e6"),
    name: "7A3",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006560"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048e7"),
    name: "2A2",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655b"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048e8"),
    name: "3A8",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655c"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048e9"),
    name: "S1",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006556"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048ea"),
    name: "4A4",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655d"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048eb"),
    name: "S3",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006556"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048ec"),
    name: "11C1",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006564"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048ed"),
    name: "2A4",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655b"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048ee"),
    name: "3A7",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655c"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048ef"),
    name: "4A3",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655d"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048f0"),
    name: "12A2",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006565"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048f1"),
    name: "9A2",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006562"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048f2"),
    name: "M1",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006556"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048f3"),
    name: "5A3",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655e"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048f4"),
    name: "S2",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006556"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048f5"),
    name: "1A4",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655a"),
    "delete_at": ISODate("2023-12-14T17:31:05.796Z")
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048f6"),
    name: "3C1",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655c"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048f7"),
    name: "8A2",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006561"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048f8"),
    name: "3A5",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655c"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048f9"),
    name: "3A3",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655c"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048fa"),
    name: "3A2",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655c"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048fb"),
    name: "4A1",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655d"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048fc"),
    name: "4A7",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655d"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048fd"),
    name: "12A1",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006565"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048fe"),
    name: "7A1",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006560"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b0000460048ff"),
    name: "M2",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006556"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b000046004900"),
    name: "6A2",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655f"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b000046004901"),
    name: "10A2",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006563"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b000046004902"),
    name: "1A4",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655a"),
    "delete_at": ISODate("2023-12-14T17:31:08.608Z")
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b000046004903"),
    name: "10B1",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006563"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b000046004904"),
    name: "1A4",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655a"),
    "delete_at": ISODate("2023-12-19T17:18:25.117Z")
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b000046004905"),
    name: "23",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655b"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b000046004906"),
    name: "6A",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655f"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b000046004907"),
    name: "Team Flash LQMB",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006556"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b000046004908"),
    name: "7A",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006560"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b000046004909"),
    name: "7B",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006560"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b00004600490a"),
    name: "Khối lớp 2",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006556"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b00004600490b"),
    name: "2A2",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655b"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b00004600490c"),
    name: "2A3",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655b"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b00004600490d"),
    name: "2A10",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655b"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b00004600490e"),
    name: "3A4",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655c"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b00004600490f"),
    name: "1A8",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655a"),
    "delete_at": ISODate("2023-12-17T14:45:30.934Z")
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b000046004910"),
    name: "ádfasdfasdf",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006556"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b000046004911"),
    name: "4B1",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655d"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b000046004912"),
    name: "10B2",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006563"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b000046004913"),
    name: "4B1",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655d"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b000046004914"),
    name: "4B2",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655d"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b000046004915"),
    name: "4b3",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655d"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b000046004916"),
    name: "2A10",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655b"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b000046004917"),
    name: "Lớp Ngủ Ngày Cày Đêm",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006556"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b000046004918"),
    name: "Lớp Học Của Chung",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006556"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b000046004919"),
    name: "ass",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006556"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b00004600491a"),
    name: "Lớp Test 14/6/2021",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006556"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b00004600491b"),
    name: "2c8",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655b"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b00004600491c"),
    name: "Lớp Học Thầy Chung",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006556"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b00004600491d"),
    name: "Lớp 8A1",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006556"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b000046004921"),
    name: "5B1",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655e"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b000046004922"),
    name: "5D1",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655e"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b000046004923"),
    name: "5A2",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655e"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b000046004924"),
    name: "2A8",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655b"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b000046004925"),
    name: "Lớp lý thuyết điện",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006556"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b000046004926"),
    name: "Lớp lý thuyết may",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006556"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b000046004927"),
    name: "Lớp lý thuyết nhiệt",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006556"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b000046004928"),
    name: "Lớp thực hành điện",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006556"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b000046004929"),
    name: "Lớp thực hành may",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006556"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b00004600492a"),
    name: "Lớp thực hành nhiêt",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006556"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b00004600492b"),
    name: "TT - May 10",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006556"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b00004600492c"),
    name: "TT - Nhiệt 13",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006556"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b00004600492d"),
    name: "TT - Điện 13",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006556"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b00004600492e"),
    name: "KT - 2021 - K1",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006556"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b00004600492f"),
    name: "KT - 2021 - K2",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006556"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b000046004930"),
    name: "2c8",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655b"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b000046004931"),
    name: "1a",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655a"),
    "delete_at": ISODate("2023-12-14T17:31:13.565Z")
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b000046004932"),
    name: "Test 2A11",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006556"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b000046004933"),
    name: "Nguyen\r\nXuan",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006556"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b000046004934"),
    name: "Test 1A",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006556"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b000046004935"),
    name: "6A1",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655f"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b000046004936"),
    name: "ClassTest 11/8/2021",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006556"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b000046004937"),
    name: "Test Class 11-8-2021",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006556"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b000046004938"),
    name: "Tsst 123123",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006556"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b000046004939"),
    name: "2D",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655b"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b00004600493a"),
    name: "2F",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655b"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b00004600493b"),
    name: "tetst131312",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006556"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b00004600493c"),
    name: "11A1",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e5869000048006564"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b00004600493d"),
    name: "6A39",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655f"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b00004600493e"),
    name: "6A4",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655f"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b00004600493f"),
    name: "1A1",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655a"),
    "delete_at": ISODate("2023-12-14T17:31:22.42Z")
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654ba6aef02b000046004940"),
    name: "1A1",
    status: "RUNNING",
    "grade_id": ObjectId("654a691e586900004800655a"),
    "delete_at": null
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654e5e0bedaf08eb648e2a09"),
    name: "test",
    "grade_id": ObjectId("654a691e5869000048006557"),
    status: "RUNNING",
    "delete_at": null,
    "create_at": ISODate("2023-11-10T16:44:59.007Z"),
    "update_at": ISODate("2023-11-10T16:44:59.007Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654e5e21edaf08eb648e2a10"),
    name: "test2",
    "grade_id": ObjectId("654a691e5869000048006557"),
    status: "RUNNING",
    "delete_at": null,
    "create_at": ISODate("2023-11-10T16:45:21.342Z"),
    "update_at": ISODate("2023-11-10T16:45:21.343Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654e5e56edaf08eb648e2a20"),
    name: "www",
    "grade_id": ObjectId("654a691e5869000048006557"),
    status: "RUNNING",
    "delete_at": null,
    "create_at": ISODate("2023-11-10T16:46:14.621Z"),
    "update_at": ISODate("2023-11-10T16:46:14.621Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654e5e5aedaf08eb648e2a27"),
    name: "2222",
    "grade_id": ObjectId("654a691e586900004800655b"),
    status: "RUNNING",
    "delete_at": null,
    "create_at": ISODate("2023-11-10T16:46:18.55Z"),
    "update_at": ISODate("2023-11-10T16:46:18.55Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654e5ea8edaf08eb648e2a5a"),
    name: "www",
    "grade_id": ObjectId("654a691e5869000048006558"),
    status: "RUNNING",
    "delete_at": null,
    "create_at": ISODate("2023-11-10T16:47:36.051Z"),
    "update_at": ISODate("2023-11-10T16:47:36.051Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("654f8626077bf8785f3d20d4"),
    name: "test2",
    "grade_id": ObjectId("654a691e5869000048006556"),
    status: "RUNNING",
    "delete_at": null,
    "create_at": ISODate("2023-11-11T13:48:22.417Z"),
    "update_at": ISODate("2023-11-11T13:48:22.417Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("6556471cafd5144ec8fac681"),
    name: "Lớp 1A",
    "grade_id": ObjectId("654a691e586900004800655a"),
    status: "RUNNING",
    "delete_at": null,
    "create_at": ISODate("2023-11-16T16:45:16.143Z"),
    "update_at": ISODate("2023-11-16T16:45:16.143Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("655e1600a486a319c0851455"),
    name: "Lớp 6A",
    "grade_id": ObjectId("654a691e586900004800655f"),
    status: "RUNNING",
    "delete_at": null,
    "create_at": ISODate("2023-11-22T14:53:52.202Z"),
    "update_at": ISODate("2023-11-22T14:53:52.202Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("655f6797919184301d460666"),
    name: "Lớp mầm 3",
    "grade_id": ObjectId("654a691e5869000048006557"),
    status: "RUNNING",
    "start_from": ISODate("2023-11-23T14:54:15.475Z"),
    "end_to": ISODate("2024-11-23T14:54:15.475Z"),
    "delete_at": null,
    "create_at": ISODate("2023-11-23T14:54:15.478Z"),
    "update_at": ISODate("2023-11-23T14:54:15.478Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("6564bd7dd6a46c320f427983"),
    name: "Lớp 10A",
    "grade_id": ObjectId("654a691e5869000048006563"),
    status: "RUNNING",
    "start_from": ISODate("2023-11-27T16:02:05.418Z"),
    "end_to": ISODate("2024-11-27T16:02:05.418Z"),
    "delete_at": null,
    "create_at": ISODate("2023-11-27T16:02:05.422Z"),
    "update_at": ISODate("2023-11-27T16:02:05.422Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("6564bf97d6a46c320f427aa8"),
    name: "Lớp 2A",
    "grade_id": ObjectId("654a691e586900004800655b"),
    status: "RUNNING",
    "start_from": ISODate("2023-11-27T16:11:03.709Z"),
    "end_to": ISODate("2024-11-27T16:11:03.709Z"),
    "delete_at": null,
    "create_at": ISODate("2023-11-27T16:11:03.709Z"),
    "update_at": ISODate("2023-11-27T16:11:03.709Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for employee
// ----------------------------
db.getCollection("employee").drop();
db.createCollection("employee");

// ----------------------------
// Documents of employee
// ----------------------------
db.getCollection("employee").insert([ {
    _id: ObjectId("656f3845a691514470f6cbfc"),
    "account_id": ObjectId("656f3845a691514470f6cbf8"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("1"),
    "subject_id": ObjectId("656ded55a106000075007579"),
    "class_list": [ ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-05T14:48:37.106Z"),
    "delete_at": ISODate("2023-12-14T17:20:23.242Z"),
    "update_at": ISODate("2023-12-05T14:48:37.108Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("6570bce79f0be15ef8c0a119"),
    "account_id": ObjectId("6570bce79f0be15ef8c0a114"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a1060000750074d2"),
    "class_list": [
        {
            "class_id": ObjectId("6556471cafd5144ec8fac681"),
            "start_date": ISODate("2023-12-06T00:00:00.000Z"),
            "end_date": ISODate("1970-01-01T00:00:00.000Z")
        },
        {
            "class_id": ObjectId("654ba6aef02b0000460048c5"),
            "start_date": ISODate("2023-09-12T00:00:00.000Z"),
            "end_date": ISODate("1970-01-01T00:00:00.000Z")
        }
    ],
    "create_at": ISODate("2023-12-06T18:26:47.382Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-06T18:26:47.384Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("6570becdfaf42e92d6c9d2d5"),
    "account_id": ObjectId("6570becdfaf42e92d6c9d2d0"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a1060000750074d2"),
    "class_list": [
        {
            "class_id": ObjectId("654ba6aef02b000046004904"),
            "start_date": ISODate("2023-12-12T00:00:00.000Z"),
            "end_date": ISODate("1970-01-01T00:00:00.000Z")
        },
        {
            "class_id": ObjectId("654ba6aef02b000046004904"),
            "start_date": ISODate("2023-10-22T00:00:00.000Z"),
            "end_date": ISODate("2023-12-31T00:00:00.000Z")
        }
    ],
    "create_at": ISODate("2023-12-06T18:34:53.141Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-06T18:34:53.142Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("6571db597d5437cf3cd6add7"),
    "account_id": ObjectId("6571db597d5437cf3cd6add3"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a1060000750074d3"),
    "class_list": [
        {
            "class_id": ObjectId("6556471cafd5144ec8fac681"),
            "start_date": ISODate("2023-12-06T00:00:00.000Z"),
            "end_date": ISODate("1970-01-01T00:00:00.000Z")
        },
        {
            "class_id": ObjectId("654ba6aef02b0000460048c5"),
            "start_date": ISODate("2023-09-12T00:00:00.000Z"),
            "end_date": ISODate("1970-01-01T00:00:00.000Z")
        }
    ],
    address: "Hà Nam",
    "create_at": ISODate("2023-12-07T14:48:57.508Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-07T14:48:57.509Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("6579edaa70b6146071df798c"),
    "account_id": ObjectId("6579edaa70b6146071df7988"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a1060000750074d2"),
    "class_list": [
        {
            "class_id": ObjectId("654ba6aef02b000046004904"),
            "start_date": ISODate("2023-10-22T00:00:00.000Z"),
            "end_date": ISODate("2023-12-31T00:00:00.000Z")
        },
        {
            "class_id": ObjectId("654ba6aef02b000046004904"),
            "start_date": ISODate("0003-10-22T00:00:00.000Z"),
            "end_date": ISODate("2023-12-31T00:00:00.000Z")
        }
    ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-13T17:45:14.023Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T17:45:14.025Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("6579edb370b6146071df7994"),
    "account_id": ObjectId("6579edb370b6146071df7990"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a1060000750074d3"),
    "class_list": [
        {
            "class_id": ObjectId("654ba6aef02b000046004904"),
            "start_date": ISODate("2023-12-12T00:00:00.000Z"),
            "end_date": ISODate("1970-01-01T00:00:00.000Z")
        },
        {
            "class_id": ObjectId("654ba6aef02b000046004940"),
            "start_date": ISODate("2023-10-22T00:00:00.000Z"),
            "end_date": ISODate("1970-01-01T00:00:00.000Z")
        }
    ],
    address: "Hoàng Mai, Hà Nội",
    "create_at": ISODate("2023-12-13T17:45:23.459Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T17:45:23.459Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("6579edb370b6146071df79a2"),
    "account_id": ObjectId("6579edb370b6146071df799e"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a1060000750074d5"),
    "class_list": [ ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-13T17:45:23.711Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T17:45:23.712Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("6579edb370b6146071df79b6"),
    "account_id": ObjectId("6579edb370b6146071df79b2"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a1060000750074d8"),
    "class_list": [ ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-13T17:45:23.965Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T17:45:23.965Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("6579edb470b6146071df79c4"),
    "account_id": ObjectId("6579edb470b6146071df79c0"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a1060000750074da"),
    "class_list": [ ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-13T17:45:24.138Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T17:45:24.139Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("6579edb470b6146071df79cc"),
    "account_id": ObjectId("6579edb470b6146071df79c8"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a1060000750074db"),
    "class_list": [ ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-13T17:45:24.23Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T17:45:24.23Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("6579edb470b6146071df79d4"),
    "account_id": ObjectId("6579edb470b6146071df79d0"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a1060000750074dc"),
    "class_list": [ ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-13T17:45:24.322Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T17:45:24.322Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("6579edb470b6146071df79dc"),
    "account_id": ObjectId("6579edb470b6146071df79d8"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a1060000750074dd"),
    "class_list": [ ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-13T17:45:24.407Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T17:45:24.407Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("6579edb470b6146071df79e4"),
    "account_id": ObjectId("6579edb470b6146071df79e0"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a1060000750074de"),
    "class_list": [ ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-13T17:45:24.49Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T17:45:24.49Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("6579edb470b6146071df79ec"),
    "account_id": ObjectId("6579edb470b6146071df79e8"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a1060000750074df"),
    "class_list": [ ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-13T17:45:24.579Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T17:45:24.579Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("6579edb470b6146071df79f4"),
    "account_id": ObjectId("6579edb470b6146071df79f0"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a1060000750074e0"),
    "class_list": [ ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-13T17:45:24.661Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T17:45:24.662Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("6579edb470b6146071df79fc"),
    "account_id": ObjectId("6579edb470b6146071df79f8"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a1060000750074e1"),
    "class_list": [ ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-13T17:45:24.742Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T17:45:24.742Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("6579edb470b6146071df7a04"),
    "account_id": ObjectId("6579edb470b6146071df7a00"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a1060000750074e2"),
    "class_list": [ ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-13T17:45:24.825Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T17:45:24.826Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("6579edb570b6146071df7a12"),
    "account_id": ObjectId("6579edb470b6146071df7a0e"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a1060000750074e4"),
    "class_list": [ ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-13T17:45:25.004Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T17:45:25.005Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("6579edb570b6146071df7a26"),
    "account_id": ObjectId("6579edb570b6146071df7a22"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a1060000750074e7"),
    "class_list": [ ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-13T17:45:25.281Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T17:45:25.281Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("6579edb570b6146071df7a34"),
    "account_id": ObjectId("6579edb570b6146071df7a30"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a1060000750074e9"),
    "class_list": [ ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-13T17:45:25.455Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T17:45:25.456Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("6579edb570b6146071df7a3c"),
    "account_id": ObjectId("6579edb570b6146071df7a38"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a1060000750074ea"),
    "class_list": [ ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-13T17:45:25.55Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T17:45:25.55Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("6579edb570b6146071df7a44"),
    "account_id": ObjectId("6579edb570b6146071df7a40"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a1060000750074eb"),
    "class_list": [ ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-13T17:45:25.638Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T17:45:25.639Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("6579edb570b6146071df7a4c"),
    "account_id": ObjectId("6579edb570b6146071df7a48"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a1060000750074ec"),
    "class_list": [ ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-13T17:45:25.731Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T17:45:25.731Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("6579edb570b6146071df7a54"),
    "account_id": ObjectId("6579edb570b6146071df7a50"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a1060000750074ed"),
    "class_list": [ ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-13T17:45:25.823Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T17:45:25.824Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("6579edb570b6146071df7a5c"),
    "account_id": ObjectId("6579edb570b6146071df7a58"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a1060000750074ee"),
    "class_list": [ ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-13T17:45:25.907Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T17:45:25.907Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("6579edb570b6146071df7a64"),
    "account_id": ObjectId("6579edb570b6146071df7a60"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a1060000750074ef"),
    "class_list": [ ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-13T17:45:25.992Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T17:45:25.993Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("6579edb670b6146071df7a72"),
    "account_id": ObjectId("6579edb670b6146071df7a6e"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a1060000750074f1"),
    "class_list": [ ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-13T17:45:26.164Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T17:45:26.165Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("6579edb670b6146071df7a7a"),
    "account_id": ObjectId("6579edb670b6146071df7a76"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a1060000750074f2"),
    "class_list": [ ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-13T17:45:26.248Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T17:45:26.249Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("6579edb670b6146071df7a82"),
    "account_id": ObjectId("6579edb670b6146071df7a7e"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a1060000750074f3"),
    "class_list": [ ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-13T17:45:26.355Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T17:45:26.355Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("6579edb670b6146071df7aa2"),
    "account_id": ObjectId("6579edb670b6146071df7a9e"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a1060000750074f8"),
    "class_list": [ ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-13T17:45:26.782Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T17:45:26.783Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("6579edb670b6146071df7aaa"),
    "account_id": ObjectId("6579edb670b6146071df7aa6"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a1060000750074f9"),
    "class_list": [ ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-13T17:45:26.866Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T17:45:26.866Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("6579edb670b6146071df7ab2"),
    "account_id": ObjectId("6579edb670b6146071df7aae"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a1060000750074fa"),
    "class_list": [ ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-13T17:45:26.948Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T17:45:26.948Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("6579edb770b6146071df7aba"),
    "account_id": ObjectId("6579edb770b6146071df7ab6"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a1060000750074ff"),
    "class_list": [ ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-13T17:45:27.029Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T17:45:27.03Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("6579edb770b6146071df7ac2"),
    "account_id": ObjectId("6579edb770b6146071df7abe"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a1060000750074fc"),
    "class_list": [ ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-13T17:45:27.114Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T17:45:27.114Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("6579edb770b6146071df7aca"),
    "account_id": ObjectId("6579edb770b6146071df7ac6"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a1060000750074fd"),
    "class_list": [ ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-13T17:45:27.198Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T17:45:27.198Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("6579edb770b6146071df7ad2"),
    "account_id": ObjectId("6579edb770b6146071df7ace"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a1060000750074fe"),
    "class_list": [ ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-13T17:45:27.28Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T17:45:27.28Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("6579edb770b6146071df7ada"),
    "account_id": ObjectId("6579edb770b6146071df7ad6"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a1060000750074fb"),
    "class_list": [ ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-13T17:45:27.37Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T17:45:27.37Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("6579edb770b6146071df7ae2"),
    "account_id": ObjectId("6579edb770b6146071df7ade"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a106000075007500"),
    "class_list": [ ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-13T17:45:27.463Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T17:45:27.463Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("6579edb770b6146071df7aea"),
    "account_id": ObjectId("6579edb770b6146071df7ae6"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a106000075007501"),
    "class_list": [ ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-13T17:45:27.548Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T17:45:27.548Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("6579edb770b6146071df7af2"),
    "account_id": ObjectId("6579edb770b6146071df7aee"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a106000075007502"),
    "class_list": [ ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-13T17:45:27.638Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T17:45:27.638Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("657b44e94a1ef8c0146ffd4c"),
    "account_id": ObjectId("657b44e94a1ef8c0146ffd48"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a10600007500751f"),
    "class_list": [ ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-14T18:09:45.442Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-14T18:09:45.443Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("657b44e94a1ef8c0146ffd54"),
    "account_id": ObjectId("657b44e94a1ef8c0146ffd50"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a106000075007520"),
    "class_list": [ ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-14T18:09:45.522Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-14T18:09:45.523Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("657b44e94a1ef8c0146ffd5c"),
    "account_id": ObjectId("657b44e94a1ef8c0146ffd58"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a106000075007521"),
    "class_list": [ ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-14T18:09:45.601Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-14T18:09:45.601Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("657b44ea4a1ef8c0146ffd88"),
    "account_id": ObjectId("657b44ea4a1ef8c0146ffd84"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a106000075007514"),
    "class_list": [
        {
            "class_id": ObjectId("654ba6aef02b0000460048cc"),
            "start_date": ISODate("0003-10-22T00:00:00.000Z"),
            "end_date": ISODate("2023-12-31T00:00:00.000Z")
        },
        {
            "class_id": ObjectId("654ba6aef02b0000460048d1"),
            "start_date": ISODate("2023-12-26T00:00:00.000Z"),
            "end_date": ISODate("2023-12-31T00:00:00.000Z")
        }
    ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-14T18:09:46.161Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-14T18:09:46.161Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("657b44ea4a1ef8c0146ffd96"),
    "account_id": ObjectId("657b44ea4a1ef8c0146ffd92"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a106000075007516"),
    "class_list": [ ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-14T18:09:46.319Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-14T18:09:46.319Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("657b44ea4a1ef8c0146ffd9e"),
    "account_id": ObjectId("657b44ea4a1ef8c0146ffd9a"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a106000075007517"),
    "class_list": [
        {
            "class_id": ObjectId("654ba6aef02b0000460048cc"),
            "start_date": ISODate("2023-10-22T00:00:00.000Z"),
            "end_date": ISODate("2023-12-31T00:00:00.000Z")
        }
    ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-14T18:09:46.396Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-14T18:09:46.397Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("657b44ea4a1ef8c0146ffda6"),
    "account_id": ObjectId("657b44ea4a1ef8c0146ffda2"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a106000075007518"),
    "class_list": [ ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-14T18:09:46.475Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-14T18:09:46.475Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("657b44ea4a1ef8c0146ffdae"),
    "account_id": ObjectId("657b44ea4a1ef8c0146ffdaa"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a106000075007519"),
    "class_list": [
        {
            "class_id": ObjectId("654ba6aef02b0000460048cc"),
            "start_date": ISODate("0003-10-22T00:00:00.000Z"),
            "end_date": ISODate("2023-12-31T00:00:00.000Z")
        },
        {
            "class_id": ObjectId("654ba6aef02b0000460048d1"),
            "start_date": ISODate("2023-12-26T00:00:00.000Z"),
            "end_date": ISODate("2023-12-31T00:00:00.000Z")
        }
    ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-14T18:09:46.554Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-14T18:09:46.555Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("657b44ea4a1ef8c0146ffdb6"),
    "account_id": ObjectId("657b44ea4a1ef8c0146ffdb2"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a10600007500751a"),
    "class_list": [
        {
            "class_id": ObjectId("654ba6aef02b0000460048cc"),
            "start_date": ISODate("2023-10-22T00:00:00.000Z"),
            "end_date": ISODate("2023-12-31T00:00:00.000Z")
        }
    ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-14T18:09:46.632Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-14T18:09:46.633Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("657b44ea4a1ef8c0146ffdc4"),
    "account_id": ObjectId("657b44ea4a1ef8c0146ffdc0"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a10600007500751c"),
    "class_list": [ ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-14T18:09:46.792Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-14T18:09:46.792Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("657b44ea4a1ef8c0146ffdd2"),
    "account_id": ObjectId("657b44ea4a1ef8c0146ffdce"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a10600007500751e"),
    "class_list": [ ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-14T18:09:46.949Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-14T18:09:46.95Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("657b44eb4a1ef8c0146ffdda"),
    "account_id": ObjectId("657b44eb4a1ef8c0146ffdd6"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a10600007500751f"),
    "class_list": [ ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-14T18:09:47.028Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-14T18:09:47.028Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("657b44eb4a1ef8c0146ffde2"),
    "account_id": ObjectId("657b44eb4a1ef8c0146ffdde"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a106000075007520"),
    "class_list": [ ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-14T18:09:47.106Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-14T18:09:47.106Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("employee").insert([ {
    _id: ObjectId("657b44eb4a1ef8c0146ffdf6"),
    "account_id": ObjectId("657b44eb4a1ef8c0146ffdf2"),
    "employee_alias_string": "2023",
    "employee_alias_number": NumberInt("2"),
    "subject_id": ObjectId("656ded55a106000075007522"),
    "class_list": [
        {
            "class_id": ObjectId("654ba6aef02b0000460048cc"),
            "start_date": ISODate("2023-10-22T00:00:00.000Z"),
            "end_date": ISODate("2023-12-31T00:00:00.000Z")
        }
    ],
    address: "Hà Nội",
    "create_at": ISODate("2023-12-14T18:09:47.344Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-14T18:09:47.345Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for gradebook
// ----------------------------
db.getCollection("gradebook").drop();
db.createCollection("gradebook");

// ----------------------------
// Documents of gradebook
// ----------------------------
db.getCollection("gradebook").insert([ {
    _id: ObjectId("65789cd5403cf4ffb76e7b48"),
    "class_id": ObjectId("6556471cafd5144ec8fac681"),
    semester: NumberInt("1"),
    "student_id": ObjectId("655ce03e2458cb8f062d67e0"),
    "subject_id": ObjectId("656ded55a1060000750074d2"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-12T17:48:05.135Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "9|8|8|7"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "7|8|8|8"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "9|8|8|9"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: "8"
        }
    ],
    "update_at": ISODate("2023-12-12T17:48:05.135Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("65789cd5403cf4ffb76e7b49"),
    "class_id": ObjectId("6556471cafd5144ec8fac681"),
    "subject_id": ObjectId("656ded55a1060000750074d2"),
    "student_id": ObjectId("655ce89002c939b1a423bda9"),
    semester: NumberInt("1"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-12T17:48:05.138Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "8|8||8"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|8||8"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "8||8|8"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: "8"
        }
    ],
    "update_at": ISODate("2023-12-12T17:48:05.138Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6578a7c8403cf4ffb76e85b2"),
    "subject_id": ObjectId("656ded55a1060000750074d3"),
    "student_id": ObjectId("655ce89002c939b1a423bda9"),
    semester: NumberInt("1"),
    "class_id": ObjectId("6556471cafd5144ec8fac681"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-12T18:34:48.543Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "7|7|7|7"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "7|7|7|7"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "7|7|8|7"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: "6"
        }
    ],
    "update_at": ISODate("2023-12-12T18:34:48.543Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6578a7c8403cf4ffb76e85b3"),
    "subject_id": ObjectId("656ded55a1060000750074d3"),
    "student_id": ObjectId("655ce03e2458cb8f062d67e0"),
    semester: NumberInt("1"),
    "class_id": ObjectId("6556471cafd5144ec8fac681"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-12T18:34:48.543Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "6|7|6|6"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "6|6|7|6"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "7|6||7"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: "7"
        }
    ],
    "update_at": ISODate("2023-12-12T18:34:48.543Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6578a858403cf4ffb76e8652"),
    "class_id": ObjectId("6556471cafd5144ec8fac681"),
    "subject_id": ObjectId("656ded55a1060000750074d4"),
    "student_id": ObjectId("655ce03e2458cb8f062d67e0"),
    semester: NumberInt("1"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-12T18:37:12.465Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "10|10|0|8"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "8|7|7|6"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "6|6|6|6"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: "6"
        }
    ],
    "update_at": ISODate("2023-12-12T18:37:12.465Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6578a858403cf4ffb76e8653"),
    "class_id": ObjectId("6556471cafd5144ec8fac681"),
    "subject_id": ObjectId("656ded55a1060000750074d4"),
    "student_id": ObjectId("655ce89002c939b1a423bda9"),
    semester: NumberInt("1"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-12T18:37:12.466Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "6||6|"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "6|6|6|6"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "6|6|7|7"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: "7"
        }
    ],
    "update_at": ISODate("2023-12-12T18:37:12.466Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("657c50cf403cf4ffb76ed5b9"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007522"),
    semester: NumberInt("1"),
    "student_id": ObjectId("6579f266f20069ea4c4f7be0"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-15T13:12:47.885Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "6|6|8|7"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "7|8|7|7"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "7|7|6|6"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: "6"
        }
    ],
    "update_at": ISODate("2023-12-15T13:12:47.885Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("657c50cf403cf4ffb76ed5ba"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007522"),
    semester: NumberInt("1"),
    "student_id": ObjectId("6579f266f20069ea4c4f7be9"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-15T13:12:47.887Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "8|8|9|9"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|0|0|8"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "8|8|8|"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: "8"
        }
    ],
    "update_at": ISODate("2023-12-15T13:12:47.887Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("657c5186403cf4ffb76ed6e8"),
    "subject_id": ObjectId("656ded55a106000075007522"),
    semester: NumberInt("1"),
    "student_id": ObjectId("6579f266f20069ea4c4f7bf2"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-15T13:15:50.067Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "||8|8"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: "8"
        },
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        }
    ],
    "update_at": ISODate("2023-12-15T13:15:50.067Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("65805487403cf4ffb76f676b"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007522"),
    semester: NumberInt("1"),
    "student_id": ObjectId("6579f266f20069ea4c4f7bfb"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-18T14:17:43.446Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|8|8|8"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "8|8|8|8"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "8|8|8|"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: "8"
        }
    ],
    "update_at": ISODate("2023-12-18T14:17:43.446Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("65805487403cf4ffb76f676c"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007522"),
    semester: NumberInt("1"),
    "student_id": ObjectId("6579f266f20069ea4c4f7c04"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-18T14:17:43.446Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|8|8|8"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "8|8|8|8"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "7||7|6"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: "6"
        }
    ],
    "update_at": ISODate("2023-12-18T14:17:43.446Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("65805487403cf4ffb76f676d"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007522"),
    semester: NumberInt("1"),
    "student_id": ObjectId("6579f266f20069ea4c4f7c0d"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-18T14:17:43.446Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "6|7|6|5"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "7|8|8|6"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "5|6|7|6"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: "7"
        }
    ],
    "update_at": ISODate("2023-12-18T14:17:43.446Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("658054af403cf4ffb76f6785"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007522"),
    semester: NumberInt("1"),
    "student_id": ObjectId("6579f266f20069ea4c4f7c16"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-18T14:18:23.073Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "||7|"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-18T14:18:23.073Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("658054af403cf4ffb76f6786"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    semester: NumberInt("1"),
    "student_id": ObjectId("6579f266f20069ea4c4f7c1f"),
    "subject_id": ObjectId("656ded55a106000075007522"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-18T14:18:23.073Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "||8|"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|9||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-18T14:18:23.073Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("658054af403cf4ffb76f6787"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007522"),
    semester: NumberInt("1"),
    "student_id": ObjectId("6579f267f20069ea4c4f7c28"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-18T14:18:23.073Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "||9|"
        },
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-18T14:18:23.073Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("658054e8403cf4ffb76f67a2"),
    "student_id": ObjectId("6579f267f20069ea4c4f7c31"),
    semester: NumberInt("1"),
    "subject_id": ObjectId("656ded55a106000075007522"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-18T14:19:20.375Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "||9|"
        },
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-18T14:19:20.375Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("65807d93403cf4ffb76f7b32"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007522"),
    "student_id": ObjectId("6579f267f20069ea4c4f7c3a"),
    semester: NumberInt("1"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-18T17:12:51.852Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-18T17:12:51.852Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("65807d93403cf4ffb76f7b33"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007522"),
    semester: NumberInt("1"),
    "student_id": ObjectId("6579f267f20069ea4c4f7c43"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-18T17:12:51.852Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-18T17:12:51.852Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("65807d93403cf4ffb76f7b34"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007522"),
    semester: NumberInt("1"),
    "student_id": ObjectId("6579f267f20069ea4c4f7c4c"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-18T17:12:51.852Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-18T17:12:51.852Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("65807d93403cf4ffb76f7b35"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007522"),
    semester: NumberInt("1"),
    "student_id": ObjectId("6579f267f20069ea4c4f7c55"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-18T17:12:51.852Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-18T17:12:51.852Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("65807d93403cf4ffb76f7b36"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007522"),
    semester: NumberInt("1"),
    "student_id": ObjectId("6579f267f20069ea4c4f7c5e"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-18T17:12:51.852Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-18T17:12:51.852Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("65807d93403cf4ffb76f7b37"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007522"),
    "student_id": ObjectId("6579f267f20069ea4c4f7c67"),
    semester: NumberInt("1"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-18T17:12:51.853Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-18T17:12:51.853Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("65807d93403cf4ffb76f7b38"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007522"),
    "student_id": ObjectId("6579f267f20069ea4c4f7c70"),
    semester: NumberInt("1"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-18T17:12:51.853Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-18T17:12:51.853Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("65807d93403cf4ffb76f7b39"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007522"),
    "student_id": ObjectId("6579f267f20069ea4c4f7c79"),
    semester: NumberInt("1"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-18T17:12:51.853Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-18T17:12:51.853Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("65807d93403cf4ffb76f7b3a"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007522"),
    semester: NumberInt("1"),
    "student_id": ObjectId("6579f267f20069ea4c4f7c82"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-18T17:12:51.853Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-18T17:12:51.853Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("65807d93403cf4ffb76f7b3b"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007522"),
    "student_id": ObjectId("6579f267f20069ea4c4f7c8b"),
    semester: NumberInt("1"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-18T17:12:51.853Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-18T17:12:51.853Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("65807d93403cf4ffb76f7b3c"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007522"),
    "student_id": ObjectId("6579f267f20069ea4c4f7c94"),
    semester: NumberInt("1"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-18T17:12:51.853Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-18T17:12:51.853Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("65807d93403cf4ffb76f7b3d"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007522"),
    semester: NumberInt("1"),
    "student_id": ObjectId("6579f268f20069ea4c4f7c9d"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-18T17:12:51.853Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-18T17:12:51.853Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6581d7bc403cf4ffb76fa3b5"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007514"),
    semester: NumberInt("1"),
    "student_id": ObjectId("6579f266f20069ea4c4f7be0"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-19T17:49:48.849Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "9|9|9|9"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "9|9|9|9"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "9|9|10|10"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: "10"
        }
    ],
    "update_at": ISODate("2023-12-19T17:49:48.849Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6581d7bc403cf4ffb76fa3b6"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007514"),
    "student_id": ObjectId("6579f266f20069ea4c4f7be9"),
    semester: NumberInt("1"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-19T17:49:48.851Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "8|8|8|7"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "7|7|8|7"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "8|7|8|7"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: "8"
        }
    ],
    "update_at": ISODate("2023-12-19T17:49:48.851Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6581d7bc403cf4ffb76fa3b7"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007514"),
    semester: NumberInt("1"),
    "student_id": ObjectId("6579f266f20069ea4c4f7bf2"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-19T17:49:48.851Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "8|8|8|8"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "8|8|8|8"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "8|7|6|7"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: "8"
        }
    ],
    "update_at": ISODate("2023-12-19T17:49:48.851Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6581d7bc403cf4ffb76fa3b8"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007514"),
    "student_id": ObjectId("6579f266f20069ea4c4f7bfb"),
    semester: NumberInt("1"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-19T17:49:48.851Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "8.6|6.8|10|"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-19T17:49:48.851Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6581d7bc403cf4ffb76fa3b9"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007514"),
    semester: NumberInt("1"),
    "student_id": ObjectId("6579f266f20069ea4c4f7c04"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-19T17:49:48.852Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-19T17:49:48.852Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6581d7bc403cf4ffb76fa3ba"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007514"),
    "student_id": ObjectId("6579f266f20069ea4c4f7c0d"),
    semester: NumberInt("1"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-19T17:49:48.852Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-19T17:49:48.852Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6581d7bc403cf4ffb76fa3bb"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007514"),
    semester: NumberInt("1"),
    "student_id": ObjectId("6579f266f20069ea4c4f7c16"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-19T17:49:48.852Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-19T17:49:48.852Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6581d7bc403cf4ffb76fa3bc"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007514"),
    "student_id": ObjectId("6579f266f20069ea4c4f7c1f"),
    semester: NumberInt("1"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-19T17:49:48.853Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-19T17:49:48.853Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6581d7bc403cf4ffb76fa3bd"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007514"),
    semester: NumberInt("1"),
    "student_id": ObjectId("6579f267f20069ea4c4f7c28"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-19T17:49:48.853Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-19T17:49:48.853Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6581d7bc403cf4ffb76fa3be"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007514"),
    "student_id": ObjectId("6579f267f20069ea4c4f7c31"),
    semester: NumberInt("1"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-19T17:49:48.853Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-19T17:49:48.853Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6581d7bc403cf4ffb76fa3bf"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007514"),
    semester: NumberInt("1"),
    "student_id": ObjectId("6579f267f20069ea4c4f7c3a"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-19T17:49:48.853Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-19T17:49:48.853Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6581d7bc403cf4ffb76fa3c0"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007514"),
    "student_id": ObjectId("6579f267f20069ea4c4f7c43"),
    semester: NumberInt("1"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-19T17:49:48.854Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-19T17:49:48.854Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6581d7bc403cf4ffb76fa3c1"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007514"),
    semester: NumberInt("1"),
    "student_id": ObjectId("6579f267f20069ea4c4f7c4c"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-19T17:49:48.854Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-19T17:49:48.854Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6581d7bc403cf4ffb76fa3c2"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007514"),
    "student_id": ObjectId("6579f267f20069ea4c4f7c55"),
    semester: NumberInt("1"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-19T17:49:48.854Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-19T17:49:48.854Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6581d7bc403cf4ffb76fa3c3"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007514"),
    semester: NumberInt("1"),
    "student_id": ObjectId("6579f267f20069ea4c4f7c5e"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-19T17:49:48.855Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-19T17:49:48.855Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6581d7bc403cf4ffb76fa3c4"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007514"),
    "student_id": ObjectId("6579f267f20069ea4c4f7c67"),
    semester: NumberInt("1"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-19T17:49:48.855Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-19T17:49:48.855Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6581d7bc403cf4ffb76fa3c5"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007514"),
    semester: NumberInt("1"),
    "student_id": ObjectId("6579f267f20069ea4c4f7c70"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-19T17:49:48.855Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-19T17:49:48.855Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6581d7bc403cf4ffb76fa3c6"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007514"),
    "student_id": ObjectId("6579f267f20069ea4c4f7c79"),
    semester: NumberInt("1"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-19T17:49:48.855Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-19T17:49:48.855Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6581d7bc403cf4ffb76fa3c7"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007514"),
    semester: NumberInt("1"),
    "student_id": ObjectId("6579f267f20069ea4c4f7c82"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-19T17:49:48.855Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-19T17:49:48.855Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6581d7bc403cf4ffb76fa3c8"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007514"),
    "student_id": ObjectId("6579f267f20069ea4c4f7c8b"),
    semester: NumberInt("1"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-19T17:49:48.855Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-19T17:49:48.855Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6581d7bc403cf4ffb76fa3c9"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007514"),
    semester: NumberInt("1"),
    "student_id": ObjectId("6579f267f20069ea4c4f7c94"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-19T17:49:48.855Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-19T17:49:48.855Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6581d7bc403cf4ffb76fa3ca"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007514"),
    "student_id": ObjectId("6579f268f20069ea4c4f7c9d"),
    semester: NumberInt("1"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-19T17:49:48.856Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-19T17:49:48.856Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6581d97a403cf4ffb76fa4a1"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007515"),
    "student_id": ObjectId("6579f266f20069ea4c4f7be0"),
    semester: NumberInt("1"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-19T17:57:14.056Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "9|8|7|7"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "6|6|6|7"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "7|7|7|7"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: "6"
        }
    ],
    "update_at": ISODate("2023-12-19T17:57:14.056Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6581d97a403cf4ffb76fa4a2"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007515"),
    "student_id": ObjectId("6579f266f20069ea4c4f7be9"),
    semester: NumberInt("1"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-19T17:57:14.061Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "7|7|7|7"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "6|6|6|7"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "7|7|7|7"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: "6"
        }
    ],
    "update_at": ISODate("2023-12-19T17:57:14.061Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6581d97a403cf4ffb76fa4a3"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007515"),
    "student_id": ObjectId("6579f266f20069ea4c4f7bf2"),
    semester: NumberInt("1"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-19T17:57:14.062Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-19T17:57:14.062Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6581d97a403cf4ffb76fa4a4"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007515"),
    "student_id": ObjectId("6579f266f20069ea4c4f7bfb"),
    semester: NumberInt("1"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-19T17:57:14.063Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-19T17:57:14.063Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6581d97a403cf4ffb76fa4a5"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007515"),
    "student_id": ObjectId("6579f266f20069ea4c4f7c04"),
    semester: NumberInt("1"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-19T17:57:14.063Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-19T17:57:14.063Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6581d97a403cf4ffb76fa4a6"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007515"),
    "student_id": ObjectId("6579f266f20069ea4c4f7c0d"),
    semester: NumberInt("1"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-19T17:57:14.064Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-19T17:57:14.064Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6581d97a403cf4ffb76fa4a7"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007515"),
    "student_id": ObjectId("6579f266f20069ea4c4f7c16"),
    semester: NumberInt("1"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-19T17:57:14.065Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-19T17:57:14.065Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6581d97a403cf4ffb76fa4a8"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007515"),
    "student_id": ObjectId("6579f266f20069ea4c4f7c1f"),
    semester: NumberInt("1"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-19T17:57:14.066Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-19T17:57:14.066Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6581d97a403cf4ffb76fa4a9"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007515"),
    "student_id": ObjectId("6579f267f20069ea4c4f7c28"),
    semester: NumberInt("1"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-19T17:57:14.067Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-19T17:57:14.067Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6581d97a403cf4ffb76fa4aa"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007515"),
    "student_id": ObjectId("6579f267f20069ea4c4f7c31"),
    semester: NumberInt("1"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-19T17:57:14.067Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-19T17:57:14.067Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6581d97a403cf4ffb76fa4ab"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007515"),
    "student_id": ObjectId("6579f267f20069ea4c4f7c3a"),
    semester: NumberInt("1"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-19T17:57:14.068Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-19T17:57:14.068Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6581d97a403cf4ffb76fa4ac"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007515"),
    "student_id": ObjectId("6579f267f20069ea4c4f7c43"),
    semester: NumberInt("1"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-19T17:57:14.068Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-19T17:57:14.068Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6581d97a403cf4ffb76fa4ad"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007515"),
    "student_id": ObjectId("6579f267f20069ea4c4f7c4c"),
    semester: NumberInt("1"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-19T17:57:14.068Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-19T17:57:14.068Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6581d97a403cf4ffb76fa4ae"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007515"),
    "student_id": ObjectId("6579f267f20069ea4c4f7c55"),
    semester: NumberInt("1"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-19T17:57:14.069Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-19T17:57:14.069Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6581d97a403cf4ffb76fa4af"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007515"),
    "student_id": ObjectId("6579f267f20069ea4c4f7c5e"),
    semester: NumberInt("1"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-19T17:57:14.069Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-19T17:57:14.069Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6581d97a403cf4ffb76fa4b0"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007515"),
    "student_id": ObjectId("6579f267f20069ea4c4f7c67"),
    semester: NumberInt("1"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-19T17:57:14.069Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-19T17:57:14.069Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6581d97a403cf4ffb76fa4b1"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007515"),
    "student_id": ObjectId("6579f267f20069ea4c4f7c70"),
    semester: NumberInt("1"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-19T17:57:14.069Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-19T17:57:14.069Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6581d97a403cf4ffb76fa4b2"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007515"),
    "student_id": ObjectId("6579f267f20069ea4c4f7c79"),
    semester: NumberInt("1"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-19T17:57:14.07Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-19T17:57:14.07Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6581d97a403cf4ffb76fa4b3"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007515"),
    "student_id": ObjectId("6579f267f20069ea4c4f7c82"),
    semester: NumberInt("1"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-19T17:57:14.07Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-19T17:57:14.07Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6581d97a403cf4ffb76fa4b4"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007515"),
    "student_id": ObjectId("6579f267f20069ea4c4f7c8b"),
    semester: NumberInt("1"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-19T17:57:14.07Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-19T17:57:14.07Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6581d97a403cf4ffb76fa4b5"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007515"),
    "student_id": ObjectId("6579f267f20069ea4c4f7c94"),
    semester: NumberInt("1"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-19T17:57:14.071Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-19T17:57:14.071Z")
} ]);
db.getCollection("gradebook").insert([ {
    _id: ObjectId("6581d97a403cf4ffb76fa4b6"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "subject_id": ObjectId("656ded55a106000075007515"),
    "student_id": ObjectId("6579f268f20069ea4c4f7c9d"),
    semester: NumberInt("1"),
    __v: NumberInt("0"),
    "create_at": ISODate("2023-12-19T17:57:14.071Z"),
    "delete_at": null,
    "list_test": [
        {
            "test_id": ObjectId("657717a3c92f00006b004bb2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771dd9c92f00006b004bc3"),
            value: "|||"
        },
        {
            "test_id": ObjectId("65771e49c92f00006b004bd2"),
            value: "|||"
        },
        {
            "test_id": ObjectId("6577205cc92f00006b004bd9"),
            value: ""
        }
    ],
    "update_at": ISODate("2023-12-19T17:57:14.071Z")
} ]);

// ----------------------------
// Collection structure for grades
// ----------------------------
db.getCollection("grades").drop();
db.createCollection("grades");

// ----------------------------
// Documents of grades
// ----------------------------
db.getCollection("grades").insert([ {
    _id: ObjectId("654a691e586900004800655a"),
    "level_id": ObjectId("65490448cf4a0000a60011b9"),
    name: "Khối lớp 1",
    description: "Khối lớp 1",
    "delete_at": null,
    "grade_key": "1-class"
} ]);
db.getCollection("grades").insert([ {
    _id: ObjectId("654a691e586900004800655b"),
    "level_id": ObjectId("65490448cf4a0000a60011b9"),
    name: "Khối lớp 2",
    description: "Khối lớp 2",
    "delete_at": null,
    "grade_key": "2-class"
} ]);
db.getCollection("grades").insert([ {
    _id: ObjectId("654a691e586900004800655c"),
    "level_id": ObjectId("65490448cf4a0000a60011b9"),
    name: "Khối lớp 3",
    description: "Khối lớp 3",
    "delete_at": null,
    "grade_key": "3-class"
} ]);
db.getCollection("grades").insert([ {
    _id: ObjectId("654a691e586900004800655d"),
    "level_id": ObjectId("65490448cf4a0000a60011b9"),
    name: "Khối lớp 4",
    description: "Khối lớp 4",
    "delete_at": null,
    "grade_key": "4-class"
} ]);
db.getCollection("grades").insert([ {
    _id: ObjectId("654a691e586900004800655e"),
    "level_id": ObjectId("65490448cf4a0000a60011b9"),
    name: "Khối lớp 5",
    description: "Khối lớp 5",
    "delete_at": null,
    "grade_key": "5-class"
} ]);
db.getCollection("grades").insert([ {
    _id: ObjectId("654a691e586900004800655f"),
    "level_id": ObjectId("65490448cf4a0000a60011ba"),
    name: "Khối lớp 6",
    description: "Khối lớp 6",
    "delete_at": null,
    "grade_key": "6-class"
} ]);
db.getCollection("grades").insert([ {
    _id: ObjectId("654a691e5869000048006560"),
    "level_id": ObjectId("65490448cf4a0000a60011ba"),
    name: "Khối lớp 7",
    description: "Khối lớp 7",
    "delete_at": null,
    "grade_key": "7-class"
} ]);
db.getCollection("grades").insert([ {
    _id: ObjectId("654a691e5869000048006561"),
    "level_id": ObjectId("65490448cf4a0000a60011ba"),
    name: "Khối lớp 8",
    description: "Khối lớp 8",
    "delete_at": null,
    "grade_key": "8-class"
} ]);
db.getCollection("grades").insert([ {
    _id: ObjectId("654a691e5869000048006562"),
    "level_id": ObjectId("65490448cf4a0000a60011ba"),
    name: "Khối lớp 9",
    description: "Khối lớp 9",
    "delete_at": null,
    "grade_key": "9-class"
} ]);
db.getCollection("grades").insert([ {
    _id: ObjectId("654a691e5869000048006563"),
    "level_id": ObjectId("65490448cf4a0000a60011bb"),
    name: "Khối lớp 10",
    description: "Khối lớp 10",
    "delete_at": null,
    "grade_key": "10-class"
} ]);
db.getCollection("grades").insert([ {
    _id: ObjectId("654a691e5869000048006564"),
    "level_id": ObjectId("65490448cf4a0000a60011bb"),
    name: "Khối lớp 11",
    description: "Khối lớp 11",
    "delete_at": null,
    "grade_key": "11-class"
} ]);
db.getCollection("grades").insert([ {
    _id: ObjectId("654a691e5869000048006565"),
    "level_id": ObjectId("65490448cf4a0000a60011bb"),
    name: "Khối lớp 12",
    description: "Khối lớp 12",
    "delete_at": null,
    "grade_key": "12-class"
} ]);

// ----------------------------
// Collection structure for lessons
// ----------------------------
db.getCollection("lessons").drop();
db.createCollection("lessons");

// ----------------------------
// Documents of lessons
// ----------------------------
db.getCollection("lessons").insert([ {
    _id: ObjectId("656609b4114a000028007402"),
    Name: "Tiết 1",
    startTime: ISODate("1970-01-01T07:00:00.000Z"),
    endTime: ISODate("1970-01-01T07:45:00.000Z")
} ]);
db.getCollection("lessons").insert([ {
    _id: ObjectId("656609b4114a000028007403"),
    Name: "Tiết 2",
    startTime: ISODate("1970-01-01T07:50:00.000Z"),
    endTime: ISODate("1970-01-01T08:35:00.000Z")
} ]);
db.getCollection("lessons").insert([ {
    _id: ObjectId("656609b4114a000028007404"),
    Name: "Tiết 3",
    startTime: ISODate("1970-01-01T08:40:00.000Z"),
    endTime: ISODate("1970-01-01T09:25:00.000Z")
} ]);
db.getCollection("lessons").insert([ {
    _id: ObjectId("656609b4114a000028007405"),
    Name: "Tiết 4",
    startTime: ISODate("1970-01-01T09:30:00.000Z"),
    endTime: ISODate("1970-01-01T10:15:00.000Z")
} ]);
db.getCollection("lessons").insert([ {
    _id: ObjectId("656609b4114a000028007406"),
    Name: "Tiết 5",
    startTime: ISODate("1970-01-01T10:20:00.000Z"),
    endTime: ISODate("1970-01-01T11:05:00.000Z")
} ]);
db.getCollection("lessons").insert([ {
    _id: ObjectId("656609b4114a000028007407"),
    Name: "Tiết 6",
    startTime: ISODate("1970-01-01T11:10:00.000Z"),
    endTime: ISODate("1970-01-01T11:55:00.000Z")
} ]);
db.getCollection("lessons").insert([ {
    _id: ObjectId("656609b4114a000028007408"),
    Name: "Tiết 7",
    startTime: ISODate("1970-01-01T12:00:00.000Z"),
    endTime: ISODate("1970-01-01T12:45:00.000Z")
} ]);
db.getCollection("lessons").insert([ {
    _id: ObjectId("656609b4114a000028007409"),
    Name: "Tiết 8",
    startTime: ISODate("1970-01-01T13:00:00.000Z"),
    endTime: ISODate("1970-01-01T13:45:00.000Z")
} ]);

// ----------------------------
// Collection structure for levels
// ----------------------------
db.getCollection("levels").drop();
db.createCollection("levels");

// ----------------------------
// Documents of levels
// ----------------------------
db.getCollection("levels").insert([ {
    _id: ObjectId("65490448cf4a0000a60011b9"),
    description: "Cấp 1",
    name: "Tiểu học",
    "delete_at": null,
    "level_key": "primary"
} ]);
db.getCollection("levels").insert([ {
    _id: ObjectId("65490448cf4a0000a60011ba"),
    description: "Cấp 2",
    name: "THCS",
    "delete_at": null,
    "level_key": "secondary"
} ]);
db.getCollection("levels").insert([ {
    _id: ObjectId("65490448cf4a0000a60011bb"),
    description: "Cấp 3",
    name: "THPT",
    "delete_at": null,
    "level_key": "highschool"
} ]);
db.getCollection("levels").insert([ {
    _id: ObjectId("655657a57a170000c8003876"),
    "level_key": "",
    description: "Nhà trường",
    name: ""
} ]);

// ----------------------------
// Collection structure for m_setting
// ----------------------------
db.getCollection("m_setting").drop();
db.createCollection("m_setting");

// ----------------------------
// Documents of m_setting
// ----------------------------
db.getCollection("m_setting").insert([ {
    _id: ObjectId("654fa47f4b2f000035006402"),
    title: "email",
    details: [
        {
            key: "account",
            value: "son.hn@akb.vn"
        },
        {
            key: "password",
            value: "son22102001"
        },
        {
            key: "port",
            value: 587
        },
        {
            key: "host",
            value: "smtp.zoho.com"
        },
        {
            key: "secure",
            value: false
        },
        {
            key: "timeout",
            value: 10000
        },
        {
            key: "from_name",
            value: "Admin QLTH"
        },
        {
            key: "from",
            value: "son.hn@akb.vn"
        },
        {
            key: "cc",
            value: ""
        }
    ]
} ]);

// ----------------------------
// Collection structure for oauth_access_tokens
// ----------------------------
db.getCollection("oauth_access_tokens").drop();
db.createCollection("oauth_access_tokens");

// ----------------------------
// Documents of oauth_access_tokens
// ----------------------------
db.getCollection("oauth_access_tokens").insert([ {
    _id: ObjectId("656f37e9a691514470f6cbd5"),
    token: "f4e08d28-a738-4ff5-bcc3-1514c56f75fd",
    "user_id": "65427bd68912512bcf0cbd56",
    revoked: NumberInt("0"),
    "created_at": ISODate("2023-12-05T14:47:05.123Z"),
    "updated_at": ISODate("2023-12-05T14:47:05.123Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("oauth_access_tokens").insert([ {
    _id: ObjectId("6570807444511a4054453d43"),
    token: "a3a3fa52-31b9-4485-85cf-989d5782eb74",
    "user_id": "65427bd68912512bcf0cbd56",
    revoked: NumberInt("0"),
    "created_at": ISODate("2023-12-06T14:08:52.243Z"),
    "updated_at": ISODate("2023-12-06T14:08:52.243Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("oauth_access_tokens").insert([ {
    _id: ObjectId("6570807e44511a4054453d4b"),
    token: "c6ec99f0-77bf-4f0c-9395-5506195c785f",
    "user_id": "65427bd68912512bcf0cbd56",
    revoked: NumberInt("0"),
    "created_at": ISODate("2023-12-06T14:09:02.732Z"),
    "updated_at": ISODate("2023-12-06T14:09:02.732Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("oauth_access_tokens").insert([ {
    _id: ObjectId("6571d2e87d5437cf3cd6ac84"),
    token: "2da86c5d-b29f-4e7e-8b76-f7f96760f485",
    "user_id": "65427bd68912512bcf0cbd56",
    revoked: NumberInt("0"),
    "created_at": ISODate("2023-12-07T14:12:56.828Z"),
    "updated_at": ISODate("2023-12-07T14:12:56.828Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("oauth_access_tokens").insert([ {
    _id: ObjectId("65732a00804438a29e4a72aa"),
    token: "73716c42-6011-4a19-a1c5-efa1a9b1b630",
    "user_id": "65427bd68912512bcf0cbd56",
    revoked: NumberInt("0"),
    "created_at": ISODate("2023-12-08T14:36:48.26Z"),
    "updated_at": ISODate("2023-12-08T14:36:48.26Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("oauth_access_tokens").insert([ {
    _id: ObjectId("6573d438204e279d6e23a7cd"),
    token: "a4cbd4ef-0f17-4065-8953-9348f140c54b",
    "user_id": "65427bd68912512bcf0cbd56",
    revoked: NumberInt("0"),
    "created_at": ISODate("2023-12-09T02:43:04.763Z"),
    "updated_at": ISODate("2023-12-09T02:43:04.763Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("oauth_access_tokens").insert([ {
    _id: ObjectId("657585e3684abc6693628aa2"),
    token: "6502c5e9-e7a1-4edb-a409-cf4830d3150e",
    "user_id": "65427bd68912512bcf0cbd56",
    revoked: NumberInt("0"),
    "created_at": ISODate("2023-12-10T09:33:23.32Z"),
    "updated_at": ISODate("2023-12-10T09:33:23.32Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("oauth_access_tokens").insert([ {
    _id: ObjectId("6577131d6dd9b3b02c8aa21c"),
    token: "c85561e8-c0a2-404c-a0b4-eb95c87d670f",
    "user_id": "65427bd68912512bcf0cbd56",
    revoked: NumberInt("0"),
    "created_at": ISODate("2023-12-11T13:48:13.408Z"),
    "updated_at": ISODate("2023-12-11T13:48:13.408Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("oauth_access_tokens").insert([ {
    _id: ObjectId("65786309706600364d4725df"),
    token: "5febc9e2-27aa-4372-afab-374dd6ff0c61",
    "user_id": "65427bd68912512bcf0cbd56",
    revoked: NumberInt("0"),
    "created_at": ISODate("2023-12-12T13:41:29.26Z"),
    "updated_at": ISODate("2023-12-12T13:41:29.26Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("oauth_access_tokens").insert([ {
    _id: ObjectId("6579eee37c68a72260e9d4ff"),
    token: "e756aff4-7f94-4005-8cdb-5156cdd257c1",
    "user_id": "65427bd68912512bcf0cbd56",
    revoked: NumberInt("0"),
    "created_at": ISODate("2023-12-13T17:50:27.093Z"),
    "updated_at": ISODate("2023-12-13T17:50:27.093Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("oauth_access_tokens").insert([ {
    _id: ObjectId("657b298f9c9df50ebfaa02d9"),
    token: "88e012cb-8466-473c-9400-930258d7efe3",
    "user_id": "65427bd68912512bcf0cbd56",
    revoked: NumberInt("0"),
    "created_at": ISODate("2023-12-14T16:13:03.131Z"),
    "updated_at": ISODate("2023-12-14T16:13:03.131Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("oauth_access_tokens").insert([ {
    _id: ObjectId("657c5133692336145f29fe9f"),
    token: "ff7f9cf6-0588-46a3-af03-110da7dce7f9",
    "user_id": "65427bd68912512bcf0cbd56",
    revoked: NumberInt("0"),
    "created_at": ISODate("2023-12-15T13:14:27.388Z"),
    "updated_at": ISODate("2023-12-15T13:14:27.388Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("oauth_access_tokens").insert([ {
    _id: ObjectId("657de42bd4cff0969c5cad18"),
    token: "a45d07c3-88bb-46b4-902d-6a2798429a60",
    "user_id": "65427bd68912512bcf0cbd56",
    revoked: NumberInt("0"),
    "created_at": ISODate("2023-12-16T17:53:47.5Z"),
    "updated_at": ISODate("2023-12-16T17:53:47.5Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("oauth_access_tokens").insert([ {
    _id: ObjectId("657f07e4480fc04d049b8597"),
    token: "d3a1c8a2-11fb-47de-955e-981b3dab23cb",
    "user_id": "65427bd68912512bcf0cbd56",
    revoked: NumberInt("0"),
    "created_at": ISODate("2023-12-17T14:38:28.138Z"),
    "updated_at": ISODate("2023-12-17T14:38:28.138Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("oauth_access_tokens").insert([ {
    _id: ObjectId("657f07e8480fc04d049b859f"),
    token: "563f6cca-de51-489d-bd44-dd8fe357997a",
    "user_id": "65427bd68912512bcf0cbd56",
    revoked: NumberInt("0"),
    "created_at": ISODate("2023-12-17T14:38:32.021Z"),
    "updated_at": ISODate("2023-12-17T14:38:32.021Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("oauth_access_tokens").insert([ {
    _id: ObjectId("657f2f56d286a1fd0eb64e32"),
    token: "d8a46d43-c746-4fec-8e40-1b6ac62f96dd",
    "user_id": "65427bd68912512bcf0cbd56",
    revoked: NumberInt("0"),
    "created_at": ISODate("2023-12-17T17:26:46.337Z"),
    "updated_at": ISODate("2023-12-17T17:26:46.337Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("oauth_access_tokens").insert([ {
    _id: ObjectId("658050516b7c30abdb181bd1"),
    token: "212c841e-841c-4f68-a390-edb79a1643d6",
    "user_id": "65427bd68912512bcf0cbd56",
    revoked: NumberInt("0"),
    "created_at": ISODate("2023-12-18T13:59:45.822Z"),
    "updated_at": ISODate("2023-12-18T13:59:45.822Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("oauth_access_tokens").insert([ {
    _id: ObjectId("6581e488b4e75863e130c43e"),
    token: "e90c46be-5462-4cd2-9e79-56572c1754ad",
    "user_id": "6581d0a9c6d84d3a38f650c0",
    revoked: NumberInt("0"),
    "created_at": ISODate("2023-12-19T18:44:24.375Z"),
    "updated_at": ISODate("2023-12-19T18:44:24.375Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("oauth_access_tokens").insert([ {
    _id: ObjectId("6582f203d4227d3fb8cb5235"),
    token: "d575efe4-68f9-4933-92b9-bd3f03f7a44f",
    "user_id": "65427bd68912512bcf0cbd56",
    revoked: NumberInt("0"),
    "created_at": ISODate("2023-12-20T13:54:11.932Z"),
    "updated_at": ISODate("2023-12-20T13:54:11.932Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("oauth_access_tokens").insert([ {
    _id: ObjectId("6583ef7847f1c92696a02aac"),
    token: "d1d701f7-e317-498f-96ca-709793d58aac",
    "user_id": "65427bd68912512bcf0cbd56",
    revoked: NumberInt("0"),
    "created_at": ISODate("2023-12-21T07:55:36.264Z"),
    "updated_at": ISODate("2023-12-21T07:55:36.264Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("oauth_access_tokens").insert([ {
    _id: ObjectId("658588ac7e5fa8daf8765ac2"),
    token: "412fcf92-26c1-4e61-80b7-99c9bb2d0ce5",
    "user_id": "65427bd68912512bcf0cbd56",
    revoked: NumberInt("0"),
    "created_at": ISODate("2023-12-22T13:01:32.071Z"),
    "updated_at": ISODate("2023-12-22T13:01:32.072Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("oauth_access_tokens").insert([ {
    _id: ObjectId("658588af7e5fa8daf8765acd"),
    token: "5dd5efae-523e-4a76-b6de-dbbe0ffca610",
    "user_id": "65427bd68912512bcf0cbd56",
    revoked: NumberInt("0"),
    "created_at": ISODate("2023-12-22T13:01:35.189Z"),
    "updated_at": ISODate("2023-12-22T13:01:35.189Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("oauth_access_tokens").insert([ {
    _id: ObjectId("65878a5b91f36c25d94050c2"),
    token: "5568102c-d4f1-4a39-a0ee-a226cc904f91",
    "user_id": "65427bd68912512bcf0cbd56",
    revoked: NumberInt("0"),
    "created_at": ISODate("2023-12-24T01:33:15.719Z"),
    "updated_at": ISODate("2023-12-24T01:33:15.719Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("oauth_access_tokens").insert([ {
    _id: ObjectId("6587c6a17916ed2cd2cf120e"),
    token: "866fb234-25f3-4eb4-aa8c-e3d691959412",
    "user_id": "6579f266f20069ea4c4f7bdc",
    revoked: NumberInt("0"),
    "created_at": ISODate("2023-12-24T05:50:25.598Z"),
    "updated_at": ISODate("2023-12-24T05:50:25.598Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("oauth_access_tokens").insert([ {
    _id: ObjectId("65883e60418e1ac7286bf48c"),
    token: "417f8b22-66f1-40b1-986b-5e68bcd31362",
    "user_id": "65427bd68912512bcf0cbd56",
    revoked: NumberInt("0"),
    "created_at": ISODate("2023-12-24T14:21:20.594Z"),
    "updated_at": ISODate("2023-12-24T14:21:20.594Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("oauth_access_tokens").insert([ {
    _id: ObjectId("65883e69418e1ac7286bf497"),
    token: "4360fe5e-6aa1-43d4-a101-ddbaf9679627",
    "user_id": "65427bd68912512bcf0cbd56",
    revoked: NumberInt("0"),
    "created_at": ISODate("2023-12-24T14:21:29.989Z"),
    "updated_at": ISODate("2023-12-24T14:21:29.989Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("oauth_access_tokens").insert([ {
    _id: ObjectId("6589826b7e3cd942e8e404d1"),
    token: "c9fc9ef7-f4ef-4a9f-b0e6-6a6445b6e5d6",
    "user_id": "65427bd68912512bcf0cbd56",
    revoked: NumberInt("0"),
    "created_at": ISODate("2023-12-25T13:23:55.62Z"),
    "updated_at": ISODate("2023-12-25T13:23:55.621Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("oauth_access_tokens").insert([ {
    _id: ObjectId("6589d062da0ebad518986769"),
    token: "38b49583-9ae1-4cbf-a963-50d9803ce4a0",
    "user_id": "65427bd68912512bcf0cbd56",
    revoked: NumberInt("0"),
    "created_at": ISODate("2023-12-25T18:56:34.273Z"),
    "updated_at": ISODate("2023-12-25T18:56:34.273Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for privileges
// ----------------------------
db.getCollection("privileges").drop();
db.createCollection("privileges");

// ----------------------------
// Documents of privileges
// ----------------------------
db.getCollection("privileges").insert([ {
    _id: ObjectId("6545f778ab7f0000d5000432"),
    "privilege_name": "Xem lớp",
    "privilege_discription": "Xem lớp",
    method: "GET",
    url: "api/class"
} ]);
db.getCollection("privileges").insert([ {
    _id: ObjectId("6545f778ab7f0000d5000433"),
    "privilege_name": "Tạo lớp",
    "privilege_discription": "Tạo lớp",
    method: "POST",
    url: "api/class"
} ]);
db.getCollection("privileges").insert([ {
    _id: ObjectId("6545f778ab7f0000d5000434"),
    "privilege_name": "Sửa lớp",
    "privilege_discription": "Sửa lớp",
    method: "PUT",
    url: "api/class"
} ]);
db.getCollection("privileges").insert([ {
    _id: ObjectId("6545f778ab7f0000d5000435"),
    "privilege_name": "Xóa lớp",
    "privilege_discription": "Xóa lớp",
    method: "DELETE",
    url: "api/class"
} ]);
db.getCollection("privileges").insert([ {
    _id: ObjectId("6545f778ab7f0000d5000436"),
    "privilege_name": "Xem học sinh",
    "privilege_discription": "Xem học sinh",
    method: "GET",
    url: "api/student"
} ]);
db.getCollection("privileges").insert([ {
    _id: ObjectId("6545f778ab7f0000d5000437"),
    "privilege_name": "Thêm học sinh",
    "privilege_discription": "Thêm học sinh",
    method: "POST",
    url: "api/student"
} ]);
db.getCollection("privileges").insert([ {
    _id: ObjectId("6545f778ab7f0000d5000438"),
    "privilege_name": "Sửa học sinh",
    "privilege_discription": "Sửa học sinh",
    method: "PUT",
    url: "api/student"
} ]);
db.getCollection("privileges").insert([ {
    _id: ObjectId("6545f778ab7f0000d5000439"),
    "privilege_name": "Xóa học sinh",
    "privilege_discription": "Xóa học sinh",
    method: "DELETE",
    url: "api/student"
} ]);
db.getCollection("privileges").insert([ {
    _id: ObjectId("6545f778ab7f0000d500043a"),
    "privilege_name": "Import file học sinh",
    "privilege_discription": "Import file học sinh",
    method: "POST",
    url: "api/student"
} ]);
db.getCollection("privileges").insert([ {
    _id: ObjectId("6545f778ab7f0000d500043b"),
    "privilege_name": "Xem thời khóa biểu",
    "privilege_discription": "Xem thời khóa biểu",
    method: "GET",
    url: "api/TimeTableLesson"
} ]);
db.getCollection("privileges").insert([ {
    _id: ObjectId("6545f778ab7f0000d500043c"),
    "privilege_name": "Import thời khóa biểu",
    "privilege_discription": "Import thời khóa biểu",
    method: "POST",
    url: "api/TimeTableLesson"
} ]);
db.getCollection("privileges").insert([ {
    _id: ObjectId("6545f778ab7f0000d500043d"),
    "privilege_name": "Sửa thời khóa biểu",
    "privilege_discription": "Sửa thời khóa biểu",
    method: "PUT",
    url: "api/TimeTableLesson"
} ]);
db.getCollection("privileges").insert([ {
    _id: ObjectId("6545f778ab7f0000d5000441"),
    "privilege_name": "Xem tài liệu",
    "privilege_discription": "Xem tài liệu",
    method: "GET",
    url: "api/homework"
} ]);
db.getCollection("privileges").insert([ {
    _id: ObjectId("6545f778ab7f0000d5000442"),
    "privilege_name": "Upload tài liệu",
    "privilege_discription": "Upload tài liệu",
    method: "POST",
    url: "api/homework"
} ]);
db.getCollection("privileges").insert([ {
    _id: ObjectId("6545f778ab7f0000d5000444"),
    "privilege_name": "Sửa tài liệu",
    "privilege_discription": "Sửa tài liệu",
    method: "PUT",
    url: "api/homework"
} ]);
db.getCollection("privileges").insert([ {
    _id: ObjectId("6545f778ab7f0000d5000445"),
    "privilege_name": "Xóa tài liệu",
    "privilege_discription": "Xóa tài liệu",
    method: "DELETE",
    url: "api/homework"
} ]);
db.getCollection("privileges").insert([ {
    _id: ObjectId("6545f778ab7f0000d5000446"),
    "privilege_name": "Xem thành viên",
    "privilege_discription": "Xem thành viên",
    method: "GET",
    url: "api/userprofile"
} ]);
db.getCollection("privileges").insert([ {
    _id: ObjectId("6545f778ab7f0000d5000447"),
    "privilege_name": "Thêm thành viên",
    "privilege_discription": "Thêm thành viên",
    method: "POST",
    url: "api/userprofile"
} ]);
db.getCollection("privileges").insert([ {
    _id: ObjectId("6545f778ab7f0000d5000448"),
    "privilege_name": "Sửa thành viên",
    "privilege_discription": "Sửa thành viên",
    method: "PUT",
    url: "api/userprofile"
} ]);
db.getCollection("privileges").insert([ {
    _id: ObjectId("6545f778ab7f0000d5000449"),
    "privilege_name": "Xóa thành viên",
    "privilege_discription": "Xóa thành viên",
    method: "PUT",
    url: "api/userprofile"
} ]);
db.getCollection("privileges").insert([ {
    _id: ObjectId("6545f778ab7f0000d500044a"),
    "privilege_name": "Import file thành viên",
    "privilege_discription": "Import file thành viên",
    method: "POST",
    url: "api/userprofile"
} ]);
db.getCollection("privileges").insert([ {
    _id: ObjectId("6545f778ab7f0000d500044b"),
    "privilege_name": "Xem bảng điểm",
    "privilege_discription": "Xem thông báo",
    method: "GET",
    url: "api/gradebook"
} ]);
db.getCollection("privileges").insert([ {
    _id: ObjectId("6545f778ab7f0000d500044c"),
    "privilege_name": "Thêm bảng điểm",
    "privilege_discription": "Thêm thông báo",
    method: "POST",
    url: "api/gradebook"
} ]);
db.getCollection("privileges").insert([ {
    _id: ObjectId("6545f778ab7f0000d500044d"),
    "privilege_name": "Sửa bảng điểm",
    "privilege_discription": "Sửa thông báo",
    method: "PUT",
    url: "api/gradebook"
} ]);
db.getCollection("privileges").insert([ {
    _id: ObjectId("6545f778ab7f0000d500044e"),
    "privilege_name": "Xóa bảng điểm",
    "privilege_discription": "Xóa thông báo",
    method: "PUT",
    url: "api/gradebook"
} ]);

// ----------------------------
// Collection structure for roles
// ----------------------------
db.getCollection("roles").drop();
db.createCollection("roles");

// ----------------------------
// Documents of roles
// ----------------------------
db.getCollection("roles").insert([ {
    _id: ObjectId("65475dbb5f31000076003a22"),
    "list_privilege": [
        ObjectId("6545f778ab7f0000d5000432"),
        ObjectId("6545f778ab7f0000d5000433"),
        ObjectId("6545f778ab7f0000d5000434"),
        ObjectId("6545f778ab7f0000d5000435"),
        ObjectId("6545f778ab7f0000d5000436"),
        ObjectId("6545f778ab7f0000d5000437"),
        ObjectId("6545f778ab7f0000d5000438"),
        ObjectId("6545f778ab7f0000d5000439"),
        ObjectId("6545f778ab7f0000d500043a"),
        ObjectId("6545f778ab7f0000d500043b"),
        ObjectId("6545f778ab7f0000d500043c"),
        ObjectId("6545f778ab7f0000d500043d"),
        ObjectId("6545f778ab7f0000d500043e"),
        ObjectId("6545f778ab7f0000d500043f"),
        ObjectId("6545f778ab7f0000d5000440"),
        ObjectId("6545f778ab7f0000d5000441"),
        ObjectId("6545f778ab7f0000d5000442"),
        ObjectId("6545f778ab7f0000d5000444"),
        ObjectId("6545f778ab7f0000d5000445"),
        ObjectId("6545f778ab7f0000d5000446"),
        ObjectId("6545f778ab7f0000d5000447"),
        ObjectId("6545f778ab7f0000d5000448"),
        ObjectId("6545f778ab7f0000d5000449"),
        ObjectId("6545f778ab7f0000d500044a"),
        ObjectId("6545f778ab7f0000d500044b"),
        ObjectId("6545f778ab7f0000d500044c"),
        ObjectId("6545f778ab7f0000d500044d"),
        ObjectId("6545f778ab7f0000d500044e"),
        ObjectId("6545f778ab7f0000d500044f"),
        ObjectId("6545f778ab7f0000d5000450"),
        ObjectId("6545f778ab7f0000d5000451"),
        ObjectId("6545f778ab7f0000d5000452"),
        ObjectId("6545f778ab7f0000d5000453"),
        ObjectId("6545f778ab7f0000d5000454"),
        ObjectId("6545f778ab7f0000d5000455"),
        ObjectId("6545f778ab7f0000d5000456"),
        ObjectId("6545f778ab7f0000d5000457"),
        ObjectId("6545f778ab7f0000d5000458"),
        ObjectId("6545f778ab7f0000d5000459")
    ],
    "role_name": "Quản trị viên",
    "role_key": "ADMIN"
} ]);
db.getCollection("roles").insert([ {
    _id: ObjectId("65563cbf7a170000c8003872"),
    "role_name": "Giáo viên",
    "role_key": "TEACHER",
    "list_privilege": [
        ObjectId("6545f778ab7f0000d5000432"),
        ObjectId("6545f778ab7f0000d5000433"),
        ObjectId("6545f778ab7f0000d5000434"),
        ObjectId("6545f778ab7f0000d5000436"),
        ObjectId("6545f778ab7f0000d5000437"),
        ObjectId("6545f778ab7f0000d5000438"),
        ObjectId("6545f778ab7f0000d5000439"),
        ObjectId("6545f778ab7f0000d500043a"),
        ObjectId("6545f778ab7f0000d500043b"),
        ObjectId("6545f778ab7f0000d500043c"),
        ObjectId("6545f778ab7f0000d500043d"),
        ObjectId("6545f778ab7f0000d500043e"),
        ObjectId("6545f778ab7f0000d500043f"),
        ObjectId("6545f778ab7f0000d5000440"),
        ObjectId("6545f778ab7f0000d5000441"),
        ObjectId("6545f778ab7f0000d5000442"),
        ObjectId("6545f778ab7f0000d5000444"),
        ObjectId("6545f778ab7f0000d5000445"),
        ObjectId("6545f778ab7f0000d5000446"),
        ObjectId("6545f778ab7f0000d5000447"),
        ObjectId("6545f778ab7f0000d5000448"),
        ObjectId("6545f778ab7f0000d500044b"),
        ObjectId("6545f778ab7f0000d500044c"),
        ObjectId("6545f778ab7f0000d500044d"),
        ObjectId("6545f778ab7f0000d500044e"),
        ObjectId("6545f778ab7f0000d500044f"),
        ObjectId("6545f778ab7f0000d5000450"),
        ObjectId("6545f778ab7f0000d5000451"),
        ObjectId("6545f778ab7f0000d5000452"),
        ObjectId("6545f778ab7f0000d5000453"),
        ObjectId("6545f778ab7f0000d5000454"),
        ObjectId("6545f778ab7f0000d5000455"),
        ObjectId("6545f778ab7f0000d5000456"),
        ObjectId("6545f778ab7f0000d5000457"),
        ObjectId("6545f778ab7f0000d5000458"),
        ObjectId("6545f778ab7f0000d5000459")
    ]
} ]);
db.getCollection("roles").insert([ {
    _id: ObjectId("655e1f49f17c0000bd007522"),
    "role_name": "Giáo viên bộ môn",
    "role_key": "TEACHER2",
    "list_privilege": [
        ObjectId("6545f778ab7f0000d5000432"),
        ObjectId("6545f778ab7f0000d5000433"),
        ObjectId("6545f778ab7f0000d5000434"),
        ObjectId("6545f778ab7f0000d5000436"),
        ObjectId("6545f778ab7f0000d5000437"),
        ObjectId("6545f778ab7f0000d5000438"),
        ObjectId("6545f778ab7f0000d5000439"),
        ObjectId("6545f778ab7f0000d500043a"),
        ObjectId("6545f778ab7f0000d500043b"),
        ObjectId("6545f778ab7f0000d500043c"),
        ObjectId("6545f778ab7f0000d500043d"),
        ObjectId("6545f778ab7f0000d500043e"),
        ObjectId("6545f778ab7f0000d500043f"),
        ObjectId("6545f778ab7f0000d5000440"),
        ObjectId("6545f778ab7f0000d5000441"),
        ObjectId("6545f778ab7f0000d5000442"),
        ObjectId("6545f778ab7f0000d5000444"),
        ObjectId("6545f778ab7f0000d5000445"),
        ObjectId("6545f778ab7f0000d5000446"),
        ObjectId("6545f778ab7f0000d5000447"),
        ObjectId("6545f778ab7f0000d5000448"),
        ObjectId("6545f778ab7f0000d500044b"),
        ObjectId("6545f778ab7f0000d500044c"),
        ObjectId("6545f778ab7f0000d500044d"),
        ObjectId("6545f778ab7f0000d500044e"),
        ObjectId("6545f778ab7f0000d500044f"),
        ObjectId("6545f778ab7f0000d5000450"),
        ObjectId("6545f778ab7f0000d5000451"),
        ObjectId("6545f778ab7f0000d5000452"),
        ObjectId("6545f778ab7f0000d5000453"),
        ObjectId("6545f778ab7f0000d5000454"),
        ObjectId("6545f778ab7f0000d5000455"),
        ObjectId("6545f778ab7f0000d5000456"),
        ObjectId("6545f778ab7f0000d5000457"),
        ObjectId("6545f778ab7f0000d5000458"),
        ObjectId("6545f778ab7f0000d5000459")
    ]
} ]);
db.getCollection("roles").insert([ {
    _id: ObjectId("655e1f68f17c0000bd007523"),
    "role_name": "Học sinh",
    "role_key": "STUDENTS",
    "list_privilege": [
        ObjectId("6545f778ab7f0000d5000432"),
        ObjectId("6545f778ab7f0000d5000433"),
        ObjectId("6545f778ab7f0000d5000434"),
        ObjectId("6545f778ab7f0000d5000436"),
        ObjectId("6545f778ab7f0000d5000437"),
        ObjectId("6545f778ab7f0000d5000438"),
        ObjectId("6545f778ab7f0000d5000439"),
        ObjectId("6545f778ab7f0000d500043a"),
        ObjectId("6545f778ab7f0000d500043b"),
        ObjectId("6545f778ab7f0000d500043c"),
        ObjectId("6545f778ab7f0000d500043d"),
        ObjectId("6545f778ab7f0000d500043e"),
        ObjectId("6545f778ab7f0000d500043f"),
        ObjectId("6545f778ab7f0000d5000440"),
        ObjectId("6545f778ab7f0000d5000441"),
        ObjectId("6545f778ab7f0000d5000442"),
        ObjectId("6545f778ab7f0000d5000444"),
        ObjectId("6545f778ab7f0000d5000445"),
        ObjectId("6545f778ab7f0000d5000446"),
        ObjectId("6545f778ab7f0000d5000447"),
        ObjectId("6545f778ab7f0000d5000448"),
        ObjectId("6545f778ab7f0000d500044b"),
        ObjectId("6545f778ab7f0000d500044c"),
        ObjectId("6545f778ab7f0000d500044d"),
        ObjectId("6545f778ab7f0000d500044e"),
        ObjectId("6545f778ab7f0000d500044f"),
        ObjectId("6545f778ab7f0000d5000450"),
        ObjectId("6545f778ab7f0000d5000451"),
        ObjectId("6545f778ab7f0000d5000452"),
        ObjectId("6545f778ab7f0000d5000453"),
        ObjectId("6545f778ab7f0000d5000454"),
        ObjectId("6545f778ab7f0000d5000455"),
        ObjectId("6545f778ab7f0000d5000456"),
        ObjectId("6545f778ab7f0000d5000457"),
        ObjectId("6545f778ab7f0000d5000458"),
        ObjectId("6545f778ab7f0000d5000459")
    ]
} ]);
db.getCollection("roles").insert([ {
    _id: ObjectId("655e214ff17c0000bd007524"),
    "role_name": "Hành chính",
    "role_key": "OFFICE",
    "list_privilege": [
        ObjectId("6545f778ab7f0000d5000432"),
        ObjectId("6545f778ab7f0000d5000433"),
        ObjectId("6545f778ab7f0000d5000434"),
        ObjectId("6545f778ab7f0000d5000436"),
        ObjectId("6545f778ab7f0000d5000437"),
        ObjectId("6545f778ab7f0000d5000438"),
        ObjectId("6545f778ab7f0000d5000439"),
        ObjectId("6545f778ab7f0000d500043a"),
        ObjectId("6545f778ab7f0000d500043b"),
        ObjectId("6545f778ab7f0000d500043c"),
        ObjectId("6545f778ab7f0000d500043d"),
        ObjectId("6545f778ab7f0000d500043e"),
        ObjectId("6545f778ab7f0000d500043f"),
        ObjectId("6545f778ab7f0000d5000440"),
        ObjectId("6545f778ab7f0000d5000441"),
        ObjectId("6545f778ab7f0000d5000442"),
        ObjectId("6545f778ab7f0000d5000444"),
        ObjectId("6545f778ab7f0000d5000445"),
        ObjectId("6545f778ab7f0000d5000446"),
        ObjectId("6545f778ab7f0000d5000447"),
        ObjectId("6545f778ab7f0000d5000448"),
        ObjectId("6545f778ab7f0000d500044b"),
        ObjectId("6545f778ab7f0000d500044c"),
        ObjectId("6545f778ab7f0000d500044d"),
        ObjectId("6545f778ab7f0000d500044e"),
        ObjectId("6545f778ab7f0000d500044f"),
        ObjectId("6545f778ab7f0000d5000450"),
        ObjectId("6545f778ab7f0000d5000451"),
        ObjectId("6545f778ab7f0000d5000452"),
        ObjectId("6545f778ab7f0000d5000453"),
        ObjectId("6545f778ab7f0000d5000454"),
        ObjectId("6545f778ab7f0000d5000455"),
        ObjectId("6545f778ab7f0000d5000456"),
        ObjectId("6545f778ab7f0000d5000457"),
        ObjectId("6545f778ab7f0000d5000458"),
        ObjectId("6545f778ab7f0000d5000459")
    ]
} ]);
db.getCollection("roles").insert([ {
    _id: ObjectId("655e21b0f17c0000bd007525"),
    "role_name": "Bảo vệ",
    "role_key": "SERCURITY",
    "list_privilege": [
        ObjectId("6545f778ab7f0000d5000432"),
        ObjectId("6545f778ab7f0000d5000433"),
        ObjectId("6545f778ab7f0000d5000434"),
        ObjectId("6545f778ab7f0000d5000436"),
        ObjectId("6545f778ab7f0000d5000437"),
        ObjectId("6545f778ab7f0000d5000438"),
        ObjectId("6545f778ab7f0000d5000439"),
        ObjectId("6545f778ab7f0000d500043a"),
        ObjectId("6545f778ab7f0000d500043b"),
        ObjectId("6545f778ab7f0000d500043c"),
        ObjectId("6545f778ab7f0000d500043d"),
        ObjectId("6545f778ab7f0000d500043e"),
        ObjectId("6545f778ab7f0000d500043f"),
        ObjectId("6545f778ab7f0000d5000440"),
        ObjectId("6545f778ab7f0000d5000441"),
        ObjectId("6545f778ab7f0000d5000442"),
        ObjectId("6545f778ab7f0000d5000444"),
        ObjectId("6545f778ab7f0000d5000445"),
        ObjectId("6545f778ab7f0000d5000446"),
        ObjectId("6545f778ab7f0000d5000447"),
        ObjectId("6545f778ab7f0000d5000448"),
        ObjectId("6545f778ab7f0000d500044b"),
        ObjectId("6545f778ab7f0000d500044c"),
        ObjectId("6545f778ab7f0000d500044d"),
        ObjectId("6545f778ab7f0000d500044e"),
        ObjectId("6545f778ab7f0000d500044f"),
        ObjectId("6545f778ab7f0000d5000450"),
        ObjectId("6545f778ab7f0000d5000451"),
        ObjectId("6545f778ab7f0000d5000452"),
        ObjectId("6545f778ab7f0000d5000453"),
        ObjectId("6545f778ab7f0000d5000454"),
        ObjectId("6545f778ab7f0000d5000455"),
        ObjectId("6545f778ab7f0000d5000456"),
        ObjectId("6545f778ab7f0000d5000457"),
        ObjectId("6545f778ab7f0000d5000458"),
        ObjectId("6545f778ab7f0000d5000459")
    ]
} ]);
db.getCollection("roles").insert([ {
    _id: ObjectId("655e21cef17c0000bd007526"),
    "role_name": "Thủ thư",
    "role_key": "LIBRARY",
    "list_privilege": [
        ObjectId("6545f778ab7f0000d5000432"),
        ObjectId("6545f778ab7f0000d5000433"),
        ObjectId("6545f778ab7f0000d5000434"),
        ObjectId("6545f778ab7f0000d5000436"),
        ObjectId("6545f778ab7f0000d5000437"),
        ObjectId("6545f778ab7f0000d5000438"),
        ObjectId("6545f778ab7f0000d5000439"),
        ObjectId("6545f778ab7f0000d500043a"),
        ObjectId("6545f778ab7f0000d500043b"),
        ObjectId("6545f778ab7f0000d500043c"),
        ObjectId("6545f778ab7f0000d500043d"),
        ObjectId("6545f778ab7f0000d500043e"),
        ObjectId("6545f778ab7f0000d500043f"),
        ObjectId("6545f778ab7f0000d5000440"),
        ObjectId("6545f778ab7f0000d5000441"),
        ObjectId("6545f778ab7f0000d5000442"),
        ObjectId("6545f778ab7f0000d5000444"),
        ObjectId("6545f778ab7f0000d5000445"),
        ObjectId("6545f778ab7f0000d5000446"),
        ObjectId("6545f778ab7f0000d5000447"),
        ObjectId("6545f778ab7f0000d5000448"),
        ObjectId("6545f778ab7f0000d500044b"),
        ObjectId("6545f778ab7f0000d500044c"),
        ObjectId("6545f778ab7f0000d500044d"),
        ObjectId("6545f778ab7f0000d500044e"),
        ObjectId("6545f778ab7f0000d500044f"),
        ObjectId("6545f778ab7f0000d5000450"),
        ObjectId("6545f778ab7f0000d5000451"),
        ObjectId("6545f778ab7f0000d5000452"),
        ObjectId("6545f778ab7f0000d5000453"),
        ObjectId("6545f778ab7f0000d5000454"),
        ObjectId("6545f778ab7f0000d5000455"),
        ObjectId("6545f778ab7f0000d5000456"),
        ObjectId("6545f778ab7f0000d5000457"),
        ObjectId("6545f778ab7f0000d5000458"),
        ObjectId("6545f778ab7f0000d5000459")
    ]
} ]);

// ----------------------------
// Collection structure for rooms
// ----------------------------
db.getCollection("rooms").drop();
db.createCollection("rooms");

// ----------------------------
// Documents of rooms
// ----------------------------
db.getCollection("rooms").insert([ {
    _id: ObjectId("658092fa7b31ac75a13746c5"),
    name: "101",
    "list_class": [ ],
    "create_at": ISODate("2023-12-18T18:44:10.615Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-18T18:44:10.619Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("rooms").insert([ {
    _id: ObjectId("658093407b31ac75a13746d8"),
    "list_class": [ ],
    "create_at": ISODate("2023-12-18T18:45:20.725Z"),
    "delete_at": ISODate("2023-12-18T18:55:34.057Z"),
    "update_at": ISODate("2023-12-18T18:45:20.725Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("rooms").insert([ {
    _id: ObjectId("658093447b31ac75a13746dd"),
    "list_class": [ ],
    "create_at": ISODate("2023-12-18T18:45:24.295Z"),
    "delete_at": ISODate("2023-12-18T18:55:37.016Z"),
    "update_at": ISODate("2023-12-18T18:45:24.295Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("rooms").insert([ {
    _id: ObjectId("6580934b7b31ac75a13746e6"),
    "list_class": [ ],
    "create_at": ISODate("2023-12-18T18:45:31.52Z"),
    "delete_at": ISODate("2023-12-18T18:55:21.521Z"),
    "update_at": ISODate("2023-12-18T18:45:31.52Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("rooms").insert([ {
    _id: ObjectId("658093737b31ac75a13746ed"),
    "list_class": [ ],
    "create_at": ISODate("2023-12-18T18:46:11.264Z"),
    "delete_at": ISODate("2023-12-18T18:55:25.016Z"),
    "update_at": ISODate("2023-12-18T18:46:11.265Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("rooms").insert([ {
    _id: ObjectId("658093db7b31ac75a13746f4"),
    "list_class": [ ],
    "create_at": ISODate("2023-12-18T18:47:55.187Z"),
    "delete_at": ISODate("2023-12-18T18:55:28.117Z"),
    "update_at": ISODate("2023-12-18T18:47:55.188Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("rooms").insert([ {
    _id: ObjectId("658094107b31ac75a13746fb"),
    "list_class": [ ],
    "create_at": ISODate("2023-12-18T18:48:48.218Z"),
    "delete_at": ISODate("2023-12-18T18:55:31.089Z"),
    "update_at": ISODate("2023-12-18T18:48:48.218Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("rooms").insert([ {
    _id: ObjectId("6581b9cfde38612e37cc49a8"),
    name: "102",
    "list_class": [ ],
    "create_at": ISODate("2023-12-19T15:42:07.811Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-19T15:42:07.815Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("rooms").insert([ {
    _id: ObjectId("6581b9dbde38612e37cc49b2"),
    name: "103",
    "list_class": [ ],
    "create_at": ISODate("2023-12-19T15:42:19.098Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-19T15:42:19.098Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("rooms").insert([ {
    _id: ObjectId("6581b9e2de38612e37cc49bc"),
    name: "104",
    "list_class": [ ],
    "create_at": ISODate("2023-12-19T15:42:26.995Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-19T15:42:26.995Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("rooms").insert([ {
    _id: ObjectId("6581b9eede38612e37cc49c6"),
    name: "Sân trường",
    "list_class": [ ],
    "create_at": ISODate("2023-12-19T15:42:38.112Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-19T15:42:38.112Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for schoolyear
// ----------------------------
db.getCollection("schoolyear").drop();
db.createCollection("schoolyear");

// ----------------------------
// Documents of schoolyear
// ----------------------------
db.getCollection("schoolyear").insert([ {
    _id: ObjectId("6573f0bd473480275e705b2a"),
    name: "Năm học 2023-2024",
    semester: [
        {
            order: NumberInt("1"),
            "start_date": ISODate("2023-09-03T00:00:00.000Z"),
            "end_date": ISODate("2023-12-31T00:00:00.000Z")
        },
        {
            order: NumberInt("2"),
            "start_date": ISODate("2024-01-01T00:00:00.000Z"),
            "end_date": ISODate("2024-06-15T00:00:00.000Z")
        }
    ],
    "delete_at": null,
    "create_at": ISODate("2023-12-09T04:44:45.606Z"),
    "update_at": ISODate("2023-12-09T04:44:45.606Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for students
// ----------------------------
db.getCollection("students").drop();
db.createCollection("students");

// ----------------------------
// Documents of students
// ----------------------------
db.getCollection("students").insert([ {
    _id: ObjectId("655ce03e2458cb8f062d67e0"),
    "account_id": ObjectId("655ce03e2458cb8f062d67dc"),
    "student_alias_string": "2023",
    "student_alias_number": NumberInt("1"),
    "parent_name": "Nguyễn Hải Sơn",
    "class_id": ObjectId("6556471cafd5144ec8fac681"),
    "create_at": ISODate("2023-11-21T16:52:14.452Z"),
    "delete_at": null,
    "update_at": ISODate("2023-11-21T16:52:14.453Z"),
    __v: NumberInt("0"),
    address: "Hà Nội",
    "class_list": [
        {
            "class_id": ObjectId("6556471cafd5144ec8fac681"),
            "start_date": ISODate("2023-11-23T14:54:15.475Z"),
            "end_date": null
        }
    ]
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("655ce89002c939b1a423bda9"),
    "account_id": ObjectId("655ce89002c939b1a423bda5"),
    "student_alias_string": "2023",
    "student_alias_number": NumberInt("1"),
    "parent_name": "Nguyễn Văn B",
    address: "Hà Nam",
    "class_id": ObjectId("6556471cafd5144ec8fac681"),
    "create_at": ISODate("2023-11-21T17:27:44.505Z"),
    "delete_at": ISODate("2023-12-14T16:12:42.94Z"),
    "update_at": ISODate("2023-11-21T17:27:44.505Z"),
    __v: NumberInt("0"),
    "class_list": [
        {
            "class_id": ObjectId("6556471cafd5144ec8fac681"),
            "start_date": ISODate("2023-11-23T14:54:15.475Z"),
            "end_date": null
        }
    ]
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("655f71eb7fcfb053ebc08228"),
    "account_id": ObjectId("655f71eb7fcfb053ebc08224"),
    "student_alias_string": "2023",
    "student_alias_number": NumberInt("1"),
    "parent_name": "Lê Thị Thúy",
    "class_id": ObjectId("655f6797919184301d460666"),
    "class_list": [
        {
            "class_id": ObjectId("655f6797919184301d460666"),
            "start_date": ISODate("2023-11-23T14:54:15.475Z"),
            "end_date": null
        }
    ],
    "create_at": ISODate("2023-11-23T15:38:19.262Z"),
    "delete_at": null,
    "update_at": ISODate("2023-11-23T15:38:19.263Z"),
    __v: NumberInt("1")
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("6579f266f20069ea4c4f7be0"),
    "account_id": ObjectId("6579f266f20069ea4c4f7bdc"),
    "student_alias_string": "2023",
    "student_alias_number": NumberInt("1"),
    address: "Hà Nội",
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "class_list": [
        {
            "class_id": ObjectId("654ba6aef02b0000460048cc"),
            "start_date": null,
            "end_date": null
        }
    ],
    "create_at": ISODate("2023-12-13T18:05:26.217Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T18:05:26.218Z"),
    __v: NumberInt("1"),
    "parent_name": "Lê Văn Bình"
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("6579f266f20069ea4c4f7be9"),
    "account_id": ObjectId("6579f266f20069ea4c4f7be5"),
    "student_alias_string": "2023",
    "student_alias_number": NumberInt("1"),
    address: "Hà Nội",
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "class_list": [
        {
            "class_id": ObjectId("654ba6aef02b0000460048cc"),
            "start_date": null,
            "end_date": null
        }
    ],
    "create_at": ISODate("2023-12-13T18:05:26.441Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T18:05:26.441Z"),
    __v: NumberInt("1")
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("6579f266f20069ea4c4f7bf2"),
    "account_id": ObjectId("6579f266f20069ea4c4f7bee"),
    "student_alias_string": "2023",
    "student_alias_number": NumberInt("1"),
    address: "Hà Nội",
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "class_list": [
        {
            "class_id": ObjectId("654ba6aef02b0000460048cc"),
            "start_date": null,
            "end_date": null
        }
    ],
    "create_at": ISODate("2023-12-13T18:05:26.523Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T18:05:26.523Z"),
    __v: NumberInt("1")
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("6579f266f20069ea4c4f7bfb"),
    "account_id": ObjectId("6579f266f20069ea4c4f7bf7"),
    "student_alias_string": "2023",
    "student_alias_number": NumberInt("1"),
    address: "Hà Nội",
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "class_list": [
        {
            "class_id": ObjectId("654ba6aef02b0000460048cc"),
            "start_date": null,
            "end_date": null
        }
    ],
    "create_at": ISODate("2023-12-13T18:05:26.603Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T18:05:26.603Z"),
    __v: NumberInt("1")
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("6579f266f20069ea4c4f7c04"),
    "account_id": ObjectId("6579f266f20069ea4c4f7c00"),
    "student_alias_string": "2023",
    "student_alias_number": NumberInt("1"),
    address: "Hà Nội",
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "class_list": [
        {
            "class_id": ObjectId("654ba6aef02b0000460048cc"),
            "start_date": null,
            "end_date": null
        }
    ],
    "create_at": ISODate("2023-12-13T18:05:26.683Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T18:05:26.684Z"),
    __v: NumberInt("1")
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("6579f266f20069ea4c4f7c0d"),
    "account_id": ObjectId("6579f266f20069ea4c4f7c09"),
    "student_alias_string": "2023",
    "student_alias_number": NumberInt("1"),
    address: "Hà Nội",
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "class_list": [
        {
            "class_id": ObjectId("654ba6aef02b0000460048cc"),
            "start_date": null,
            "end_date": null
        }
    ],
    "create_at": ISODate("2023-12-13T18:05:26.763Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T18:05:26.763Z"),
    __v: NumberInt("1")
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("6579f266f20069ea4c4f7c16"),
    "account_id": ObjectId("6579f266f20069ea4c4f7c12"),
    "student_alias_string": "2023",
    "student_alias_number": NumberInt("1"),
    address: "Hà Nội",
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "class_list": [
        {
            "class_id": ObjectId("654ba6aef02b0000460048cc"),
            "start_date": null,
            "end_date": null
        }
    ],
    "create_at": ISODate("2023-12-13T18:05:26.841Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T18:05:26.841Z"),
    __v: NumberInt("1")
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("6579f266f20069ea4c4f7c1f"),
    "account_id": ObjectId("6579f266f20069ea4c4f7c1b"),
    "student_alias_string": "2023",
    "student_alias_number": NumberInt("1"),
    address: "Hà Nội",
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "class_list": [
        {
            "class_id": ObjectId("654ba6aef02b0000460048cc"),
            "start_date": null,
            "end_date": null
        }
    ],
    "create_at": ISODate("2023-12-13T18:05:26.922Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T18:05:26.922Z"),
    __v: NumberInt("1")
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("6579f267f20069ea4c4f7c28"),
    "account_id": ObjectId("6579f266f20069ea4c4f7c24"),
    "student_alias_string": "2023",
    "student_alias_number": NumberInt("1"),
    address: "Hà Nội",
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "class_list": [
        {
            "class_id": ObjectId("654ba6aef02b0000460048cc"),
            "start_date": null,
            "end_date": null
        }
    ],
    "create_at": ISODate("2023-12-13T18:05:27.001Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T18:05:27.001Z"),
    __v: NumberInt("1")
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("6579f267f20069ea4c4f7c31"),
    "account_id": ObjectId("6579f267f20069ea4c4f7c2d"),
    "student_alias_string": "2023",
    "student_alias_number": NumberInt("1"),
    address: "Hà Nội",
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "class_list": [
        {
            "class_id": ObjectId("654ba6aef02b0000460048cc"),
            "start_date": null,
            "end_date": null
        }
    ],
    "create_at": ISODate("2023-12-13T18:05:27.08Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T18:05:27.08Z"),
    __v: NumberInt("1")
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("6579f267f20069ea4c4f7c3a"),
    "account_id": ObjectId("6579f267f20069ea4c4f7c36"),
    "student_alias_string": "2023",
    "student_alias_number": NumberInt("1"),
    address: "Hà Nội",
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "class_list": [
        {
            "class_id": ObjectId("654ba6aef02b0000460048cc"),
            "start_date": null,
            "end_date": null
        }
    ],
    "create_at": ISODate("2023-12-13T18:05:27.163Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T18:05:27.163Z"),
    __v: NumberInt("1")
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("6579f267f20069ea4c4f7c43"),
    "account_id": ObjectId("6579f267f20069ea4c4f7c3f"),
    "student_alias_string": "2023",
    "student_alias_number": NumberInt("1"),
    address: "Hà Nội",
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "class_list": [
        {
            "class_id": ObjectId("654ba6aef02b0000460048cc"),
            "start_date": null,
            "end_date": null
        }
    ],
    "create_at": ISODate("2023-12-13T18:05:27.241Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T18:05:27.241Z"),
    __v: NumberInt("1")
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("6579f267f20069ea4c4f7c4c"),
    "account_id": ObjectId("6579f267f20069ea4c4f7c48"),
    "student_alias_string": "2023",
    "student_alias_number": NumberInt("1"),
    address: "Hà Nội",
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "class_list": [
        {
            "class_id": ObjectId("654ba6aef02b0000460048cc"),
            "start_date": null,
            "end_date": null
        }
    ],
    "create_at": ISODate("2023-12-13T18:05:27.319Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T18:05:27.32Z"),
    __v: NumberInt("1")
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("6579f267f20069ea4c4f7c55"),
    "account_id": ObjectId("6579f267f20069ea4c4f7c51"),
    "student_alias_string": "2023",
    "student_alias_number": NumberInt("1"),
    address: "Hà Nội",
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "class_list": [
        {
            "class_id": ObjectId("654ba6aef02b0000460048cc"),
            "start_date": null,
            "end_date": null
        }
    ],
    "create_at": ISODate("2023-12-13T18:05:27.404Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T18:05:27.404Z"),
    __v: NumberInt("1")
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("6579f267f20069ea4c4f7c5e"),
    "account_id": ObjectId("6579f267f20069ea4c4f7c5a"),
    "student_alias_string": "2023",
    "student_alias_number": NumberInt("1"),
    address: "Hà Nội",
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "class_list": [
        {
            "class_id": ObjectId("654ba6aef02b0000460048cc"),
            "start_date": null,
            "end_date": null
        }
    ],
    "create_at": ISODate("2023-12-13T18:05:27.484Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T18:05:27.484Z"),
    __v: NumberInt("1")
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("6579f267f20069ea4c4f7c67"),
    "account_id": ObjectId("6579f267f20069ea4c4f7c63"),
    "student_alias_string": "2023",
    "student_alias_number": NumberInt("1"),
    address: "Hà Nội",
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "class_list": [
        {
            "class_id": ObjectId("654ba6aef02b0000460048cc"),
            "start_date": null,
            "end_date": null
        }
    ],
    "create_at": ISODate("2023-12-13T18:05:27.567Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T18:05:27.568Z"),
    __v: NumberInt("1")
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("6579f267f20069ea4c4f7c70"),
    "account_id": ObjectId("6579f267f20069ea4c4f7c6c"),
    "student_alias_string": "2023",
    "student_alias_number": NumberInt("1"),
    address: "Hà Nội",
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "class_list": [
        {
            "class_id": ObjectId("654ba6aef02b0000460048cc"),
            "start_date": null,
            "end_date": null
        }
    ],
    "create_at": ISODate("2023-12-13T18:05:27.653Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T18:05:27.653Z"),
    __v: NumberInt("1")
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("6579f267f20069ea4c4f7c79"),
    "account_id": ObjectId("6579f267f20069ea4c4f7c75"),
    "student_alias_string": "2023",
    "student_alias_number": NumberInt("1"),
    address: "Hà Nội",
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "class_list": [
        {
            "class_id": ObjectId("654ba6aef02b0000460048cc"),
            "start_date": null,
            "end_date": null
        }
    ],
    "create_at": ISODate("2023-12-13T18:05:27.733Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T18:05:27.733Z"),
    __v: NumberInt("1")
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("6579f267f20069ea4c4f7c82"),
    "account_id": ObjectId("6579f267f20069ea4c4f7c7e"),
    "student_alias_string": "2023",
    "student_alias_number": NumberInt("1"),
    address: "Hà Nội",
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "class_list": [
        {
            "class_id": ObjectId("654ba6aef02b0000460048cc"),
            "start_date": null,
            "end_date": null
        }
    ],
    "create_at": ISODate("2023-12-13T18:05:27.811Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T18:05:27.811Z"),
    __v: NumberInt("1")
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("6579f267f20069ea4c4f7c8b"),
    "account_id": ObjectId("6579f267f20069ea4c4f7c87"),
    "student_alias_string": "2023",
    "student_alias_number": NumberInt("1"),
    address: "Hà Nội",
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "class_list": [
        {
            "class_id": ObjectId("654ba6aef02b0000460048cc"),
            "start_date": null,
            "end_date": null
        }
    ],
    "create_at": ISODate("2023-12-13T18:05:27.889Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T18:05:27.889Z"),
    __v: NumberInt("1")
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("6579f267f20069ea4c4f7c94"),
    "account_id": ObjectId("6579f267f20069ea4c4f7c90"),
    "student_alias_string": "2023",
    "student_alias_number": NumberInt("1"),
    address: "Hà Nội",
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "class_list": [
        {
            "class_id": ObjectId("654ba6aef02b0000460048cc"),
            "start_date": null,
            "end_date": null
        }
    ],
    "create_at": ISODate("2023-12-13T18:05:27.972Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T18:05:27.973Z"),
    __v: NumberInt("1")
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("6579f268f20069ea4c4f7c9d"),
    "account_id": ObjectId("6579f268f20069ea4c4f7c99"),
    "student_alias_string": "2023",
    "student_alias_number": NumberInt("1"),
    address: "Hà Nội",
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "class_list": [
        {
            "class_id": ObjectId("654ba6aef02b0000460048cc"),
            "start_date": null,
            "end_date": null
        }
    ],
    "create_at": ISODate("2023-12-13T18:05:28.051Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-13T18:05:28.051Z"),
    __v: NumberInt("1")
} ]);

// ----------------------------
// Collection structure for subjects
// ----------------------------
db.getCollection("subjects").drop();
db.createCollection("subjects");

// ----------------------------
// Documents of subjects
// ----------------------------
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a1060000750074d2"),
    "subject_id": "lop1-ngoaingu",
    "grade_id": ObjectId("654a691e586900004800655a"),
    name: "Ngoại ngữ",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a1060000750074d3"),
    "subject_id": "lop1-tiengviet",
    "grade_id": ObjectId("654a691e586900004800655a"),
    name: "Tiếng Việt",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a1060000750074d4"),
    "subject_id": "lop1-toanhoc",
    "grade_id": ObjectId("654a691e586900004800655a"),
    name: "Toán Học",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a1060000750074d5"),
    "subject_id": "lop1-daoduc",
    "grade_id": ObjectId("654a691e586900004800655a"),
    name: "Đạo Đức",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a1060000750074d6"),
    "subject_id": "lop1-tunhienxahoi",
    "grade_id": ObjectId("654a691e586900004800655a"),
    name: "Tự nhiên Xã hội",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a1060000750074d7"),
    "subject_id": "lop1-lichsudiali",
    "grade_id": ObjectId("654a691e586900004800655a"),
    name: "Lịch sử Địa lí",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a1060000750074d8"),
    "subject_id": "lop1-khoahoc",
    "grade_id": ObjectId("654a691e586900004800655a"),
    name: "Khoa học",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a1060000750074d9"),
    "subject_id": "lop1-tinhoccongnghe",
    "grade_id": ObjectId("654a691e586900004800655a"),
    name: "Tin học Công nghệ",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a1060000750074da"),
    "subject_id": "lop1-giaoducthechat",
    "grade_id": ObjectId("654a691e586900004800655a"),
    name: "Giáo dục thể chất",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a1060000750074db"),
    "subject_id": "lop1-nghethuat",
    "grade_id": ObjectId("654a691e586900004800655a"),
    name: "Nghệ Thuật",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a1060000750074dc"),
    "subject_id": "lop1-hoatdongtrainghiem",
    "grade_id": ObjectId("654a691e586900004800655a"),
    name: "Hoạt động trải nghiệm",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a1060000750074dd"),
    "subject_id": "lop1-mithuat",
    "grade_id": ObjectId("654a691e586900004800655a"),
    name: "Mĩ thuật",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a1060000750074de"),
    "subject_id": "lop1-amnhac",
    "grade_id": ObjectId("654a691e586900004800655a"),
    name: "Âm nhạc",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a1060000750074df"),
    "subject_id": "lop2-ngoaingu",
    "grade_id": ObjectId("654a691e586900004800655b"),
    name: "Ngoại ngữ",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a1060000750074e0"),
    "subject_id": "lop2-amnhac",
    "grade_id": ObjectId("654a691e586900004800655b"),
    name: "Âm nhạc",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a1060000750074e1"),
    "subject_id": "lop2-mithuat",
    "grade_id": ObjectId("654a691e586900004800655b"),
    name: "Mĩ thuật",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a1060000750074e2"),
    "subject_id": "lop2-tiengviet",
    "grade_id": ObjectId("654a691e586900004800655b"),
    name: "Tiếng Việt",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a1060000750074e3"),
    "subject_id": "lop2-toanhoc",
    "grade_id": ObjectId("654a691e586900004800655b"),
    name: "Toán Học",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a1060000750074e4"),
    "subject_id": "lop2-daoduc",
    "grade_id": ObjectId("654a691e586900004800655b"),
    name: "Đạo Đức",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a1060000750074e5"),
    "subject_id": "lop2-tunhienxahoi",
    "grade_id": ObjectId("654a691e586900004800655b"),
    name: "Tự nhiên Xã hội",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a1060000750074e6"),
    "subject_id": "lop2-lichsudiali",
    "grade_id": ObjectId("654a691e586900004800655b"),
    name: "Lịch sử Địa lí",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a1060000750074e7"),
    "subject_id": "lop2-khoahoc",
    "grade_id": ObjectId("654a691e586900004800655b"),
    name: "Khoa học",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a1060000750074e8"),
    "subject_id": "lop2-tinhoccongnghe",
    "grade_id": ObjectId("654a691e586900004800655b"),
    name: "Tin học Công nghệ",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a1060000750074e9"),
    "subject_id": "lop2-giaoducthechat",
    "grade_id": ObjectId("654a691e586900004800655b"),
    name: "Giáo dục thể chất",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a1060000750074ea"),
    "subject_id": "lop2-nghethuat",
    "grade_id": ObjectId("654a691e586900004800655b"),
    name: "Nghệ Thuật",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a1060000750074eb"),
    "subject_id": "lop2-hoatdongtrainghiem",
    "grade_id": ObjectId("654a691e586900004800655b"),
    name: "Hoạt động trải nghiệm",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a1060000750074ec"),
    "subject_id": "lop3-amnhac",
    "grade_id": ObjectId("654a691e586900004800655c"),
    name: "Âm nhạc",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a1060000750074ed"),
    "subject_id": "lop3-daoduc",
    "grade_id": ObjectId("654a691e586900004800655c"),
    name: "Đạo đức",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a1060000750074ee"),
    "subject_id": "lop3-nghethuat",
    "grade_id": ObjectId("654a691e586900004800655c"),
    name: "Nghệ Thuật",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a1060000750074ef"),
    "subject_id": "lop3-mithuat",
    "grade_id": ObjectId("654a691e586900004800655c"),
    name: "Mĩ Thuật",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a1060000750074f0"),
    "subject_id": "lop3-theduc",
    "grade_id": ObjectId("654a691e586900004800655c"),
    name: "Giáo dục thể chất",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a1060000750074f1"),
    "subject_id": "lop3-thucong",
    "grade_id": ObjectId("654a691e586900004800655c"),
    name: "Thủ công",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a1060000750074f2"),
    "subject_id": "lop3-ngoaingu",
    "grade_id": ObjectId("654a691e586900004800655c"),
    name: "Ngoại ngữ",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a1060000750074f3"),
    "subject_id": "lop3-tiengviet",
    "grade_id": ObjectId("654a691e586900004800655c"),
    name: "Tiếng Việt",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a1060000750074f4"),
    "subject_id": "lop3-tinhoccongnghe",
    "grade_id": ObjectId("654a691e586900004800655c"),
    name: "Tin học Công nghệ",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a1060000750074f5"),
    "subject_id": "lop3-toanhoc",
    "grade_id": ObjectId("654a691e586900004800655c"),
    name: "Toán Học",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a1060000750074f6"),
    "subject_id": "lop3-tunhienxahoi",
    "grade_id": ObjectId("654a691e586900004800655c"),
    name: "Tự nhiên Xã hội",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a1060000750074f7"),
    "subject_id": "lop3-lichsudiali",
    "grade_id": ObjectId("654a691e586900004800655c"),
    name: "Lịch sử và Địa lí",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a1060000750074f8"),
    "subject_id": "lop3-khoahoc",
    "grade_id": ObjectId("654a691e586900004800655c"),
    name: "Khoa học",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a1060000750074f9"),
    "subject_id": "lop3-hoatdongtrainghiem",
    "grade_id": ObjectId("654a691e586900004800655c"),
    name: "Hoạt động trải nghiệm",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a1060000750074fa"),
    "subject_id": "lop4-amnhac",
    "grade_id": ObjectId("654a691e586900004800655d"),
    name: "Âm nhạc",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a1060000750074fb"),
    "subject_id": "lop4-nghethuat",
    "grade_id": ObjectId("654a691e586900004800655d"),
    name: "Mĩ Thuật",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a1060000750074fc"),
    "subject_id": "lop4-daoduc",
    "grade_id": ObjectId("654a691e586900004800655d"),
    name: "Đạo đức",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a1060000750074fd"),
    "subject_id": "lop4-khoahoc",
    "grade_id": ObjectId("654a691e586900004800655d"),
    name: "Khoa học",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a1060000750074fe"),
    "subject_id": "lop4-lichsuvadiali",
    "grade_id": ObjectId("654a691e586900004800655d"),
    name: "Lịch sử và Địa lí",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a1060000750074ff"),
    "subject_id": "lop4-mithuat",
    "grade_id": ObjectId("654a691e586900004800655d"),
    name: "Mĩ thuật",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007500"),
    "subject_id": "lop4-giaoducthechat",
    "grade_id": ObjectId("654a691e586900004800655d"),
    name: "Giáo dục thể chất",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007501"),
    "subject_id": "lop4-ngoaingu",
    "grade_id": ObjectId("654a691e586900004800655d"),
    name: "Ngoại ngữ",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007502"),
    "subject_id": "lop4-tiengviet",
    "grade_id": ObjectId("654a691e586900004800655d"),
    name: "Tiếng Việt",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007503"),
    "subject_id": "lop4-tinhoccongnghe",
    "grade_id": ObjectId("654a691e586900004800655d"),
    name: "Tin học Công nghệ",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007504"),
    "subject_id": "lop4-toanhoc",
    "grade_id": ObjectId("654a691e586900004800655d"),
    name: "Toán Học",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007505"),
    "subject_id": "lop4-tunhienxahoi",
    "grade_id": ObjectId("654a691e586900004800655d"),
    name: "Tự nhiên Xã hội",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007506"),
    "subject_id": "lop4-hoatdongtrainghiem",
    "grade_id": ObjectId("654a691e586900004800655d"),
    name: "Hoạt động trải nghiệm",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007507"),
    "subject_id": "lop5-amnhac",
    "grade_id": ObjectId("654a691e586900004800655e"),
    name: "Âm nhạc",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007508"),
    "subject_id": "lop5-mithuat",
    "grade_id": ObjectId("654a691e586900004800655e"),
    name: "Mĩ Thuật",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007509"),
    "subject_id": "lop5-daoduc",
    "grade_id": ObjectId("654a691e586900004800655e"),
    name: "Đạo đức ",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500750a"),
    "subject_id": "lop5-khoahoc",
    "grade_id": ObjectId("654a691e586900004800655e"),
    name: "Khoa học",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500750b"),
    "subject_id": "lop5-lichsuvadiali",
    "grade_id": ObjectId("654a691e586900004800655e"),
    name: "Lịch sử và Địa lí",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500750c"),
    "subject_id": "lop5-mithuat",
    "grade_id": ObjectId("654a691e586900004800655e"),
    name: "Nghệ Thuật",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500750d"),
    "subject_id": "lop5-theduc",
    "grade_id": ObjectId("654a691e586900004800655e"),
    name: "Giáo dục thể chất",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500750e"),
    "subject_id": "lop5-tienganh",
    "grade_id": ObjectId("654a691e586900004800655e"),
    name: "Ngoại ngữ",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500750f"),
    "subject_id": "lop5-tiengviet",
    "grade_id": ObjectId("654a691e586900004800655e"),
    name: "Tiếng Việt",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007510"),
    "subject_id": "lop5-tinhoc",
    "grade_id": ObjectId("654a691e586900004800655e"),
    name: "Tin học và Công nghệ",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007511"),
    "subject_id": "lop5-toanhoc",
    "grade_id": ObjectId("654a691e586900004800655e"),
    name: "Toán",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007512"),
    "subject_id": "lop5-tunhienxahoi",
    "grade_id": ObjectId("654a691e586900004800655e"),
    name: "Tự nhiên và xã hội",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007513"),
    "subject_id": "lop5-hoatdongtrainghiem",
    "grade_id": ObjectId("654a691e586900004800655e"),
    name: "Hoạt động trải nghiệm",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007514"),
    "subject_id": "lop6-congnghe",
    "grade_id": ObjectId("654a691e586900004800655f"),
    name: "Công nghệ",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007515"),
    "subject_id": "lop6-vatly",
    "grade_id": ObjectId("654a691e586900004800655f"),
    name: "Vật lí",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007516"),
    "subject_id": "lop6-sinhhoc",
    "grade_id": ObjectId("654a691e586900004800655f"),
    name: "Sinh học",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007517"),
    "subject_id": "lop6-diali",
    "grade_id": ObjectId("654a691e586900004800655f"),
    name: "Địa lí",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007518"),
    "subject_id": "lop6-lichsu",
    "grade_id": ObjectId("654a691e586900004800655f"),
    name: "Lịch sử",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007519"),
    "subject_id": "lop6-giaoduccongdan",
    "grade_id": ObjectId("654a691e586900004800655f"),
    name: "Giáo dục công dân",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500751a"),
    "subject_id": "lop6-nguvan",
    "grade_id": ObjectId("654a691e586900004800655f"),
    name: "Ngữ văn",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500751b"),
    "subject_id": "lop6-tienganh",
    "grade_id": ObjectId("654a691e586900004800655f"),
    name: "Ngoại ngữ",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500751c"),
    "subject_id": "lop6-tinhoc",
    "grade_id": ObjectId("654a691e586900004800655f"),
    name: "Tin học",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500751d"),
    "subject_id": "lop6-lichsudiali",
    "grade_id": ObjectId("654a691e586900004800655f"),
    name: "Lịch sử và Địa lí",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500751e"),
    "subject_id": "lop6-khoahoctunhien",
    "grade_id": ObjectId("654a691e586900004800655f"),
    name: "Khoa học tự nhiên",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500751f"),
    "subject_id": "lop6-giaoducthechat",
    "grade_id": ObjectId("654a691e586900004800655f"),
    name: "Giáo dục thể chất",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007520"),
    "subject_id": "lop6-nghethuat",
    "grade_id": ObjectId("654a691e586900004800655f"),
    name: "Nghệ Thuật",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007521"),
    "subject_id": "lop6-hoatdongtrainghiem",
    "grade_id": ObjectId("654a691e586900004800655f"),
    name: "Hoạt động trải nghiệm – Hướng nghiệp",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007522"),
    "subject_id": "lop6-toanhoc",
    "grade_id": ObjectId("654a691e586900004800655f"),
    name: "Toán Học",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007523"),
    "subject_id": "lop7-diali",
    "grade_id": ObjectId("654a691e5869000048006560"),
    name: "Địa lí",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007524"),
    "subject_id": "lop7-amnhac",
    "grade_id": ObjectId("654a691e5869000048006560"),
    name: "Nghệ thuật",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007525"),
    "subject_id": "lop7-congnghe",
    "grade_id": ObjectId("654a691e5869000048006560"),
    name: "Công nghệ",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007526"),
    "subject_id": "lop7-lichsudiali",
    "grade_id": ObjectId("654a691e5869000048006560"),
    name: "Lịch sử và Địa lí",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007527"),
    "subject_id": "lop7-giaoduccongdan",
    "grade_id": ObjectId("654a691e5869000048006560"),
    name: "Giáo dục công dân",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007528"),
    "subject_id": "lop7-lichsu",
    "grade_id": ObjectId("654a691e5869000048006560"),
    name: "Lịch sử",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007529"),
    "subject_id": "lop7-nguvan",
    "grade_id": ObjectId("654a691e5869000048006560"),
    name: "Ngữ văn",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500752a"),
    "subject_id": "lop7-khoahoctunhienfalse",
    "grade_id": ObjectId("654a691e5869000048006560"),
    name: "Khoa học tự nhiên.",
    description: "Mô tả",
    status: false
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500752b"),
    "subject_id": "lop7-sinhhoc",
    "grade_id": ObjectId("654a691e5869000048006560"),
    name: "Sinh học",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500752c"),
    "subject_id": "lop7-theduc",
    "grade_id": ObjectId("654a691e5869000048006560"),
    name: "Giáo dục thể chất",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500752d"),
    "subject_id": "lop7-tienganh",
    "grade_id": ObjectId("654a691e5869000048006560"),
    name: "Ngoại ngữ",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500752e"),
    "subject_id": "lop7-tinhoc",
    "grade_id": ObjectId("654a691e5869000048006560"),
    name: "Tin học",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500752f"),
    "subject_id": "lop7-toanhoc",
    "grade_id": ObjectId("654a691e5869000048006560"),
    name: "Toán",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007530"),
    "subject_id": "lop7-vatli",
    "grade_id": ObjectId("654a691e5869000048006560"),
    name: "Vật lí",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007531"),
    "subject_id": "lop7-lichsudialy",
    "grade_id": ObjectId("654a691e5869000048006560"),
    name: "Lịch sử và Địa lí.",
    description: "Mô tả",
    status: false
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007532"),
    "subject_id": "lop7-khoahoctunhien",
    "grade_id": ObjectId("654a691e5869000048006560"),
    name: "Khoa học tự nhiên",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007533"),
    "subject_id": "lop7-hoatdongtrainghiem",
    "grade_id": ObjectId("654a691e5869000048006560"),
    name: "Hoạt động trải nghiệm – Hướng nghiệp",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007534"),
    "subject_id": "lop8-amnhacvamithuat",
    "grade_id": ObjectId("654a691e5869000048006561"),
    name: "Nghệ thuật",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007535"),
    "subject_id": "lop8-congnghe",
    "grade_id": ObjectId("654a691e5869000048006561"),
    name: "Công nghệ",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007536"),
    "subject_id": "lop8-diali",
    "grade_id": ObjectId("654a691e5869000048006561"),
    name: "Địa lí",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007537"),
    "subject_id": "lop8-giaoduccongdan",
    "grade_id": ObjectId("654a691e5869000048006561"),
    name: "Giáo dục công dân",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007538"),
    "subject_id": "lop8-hoahoc",
    "grade_id": ObjectId("654a691e5869000048006561"),
    name: "Hoá học",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007539"),
    "subject_id": "lop8-lichsu",
    "grade_id": ObjectId("654a691e5869000048006561"),
    name: "Lịch sử",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500753a"),
    "subject_id": "lop8-nguvan",
    "grade_id": ObjectId("654a691e5869000048006561"),
    name: "Ngữ văn",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500753b"),
    "subject_id": "lop8-sinhhoc",
    "grade_id": ObjectId("654a691e5869000048006561"),
    name: "Sinh học",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500753c"),
    "subject_id": "lop8-tienganh",
    "grade_id": ObjectId("654a691e5869000048006561"),
    name: "Ngoại ngữ",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500753d"),
    "subject_id": "lop8-tinhoc",
    "grade_id": ObjectId("654a691e5869000048006561"),
    name: "Tin học",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500753e"),
    "subject_id": "lop8-toanhoc",
    "grade_id": ObjectId("654a691e5869000048006561"),
    name: "Toán",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500753f"),
    "subject_id": "lop8-vatli",
    "grade_id": ObjectId("654a691e5869000048006561"),
    name: "Vật lí",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007540"),
    "subject_id": "lop8-lichsudiali",
    "grade_id": ObjectId("654a691e5869000048006561"),
    name: "Lịch sử và Địa lí",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007541"),
    "subject_id": "lop8-khoahoctunhien",
    "grade_id": ObjectId("654a691e5869000048006561"),
    name: "Khoa học tự nhiên",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007542"),
    "subject_id": "lop8-giaoducthechat",
    "grade_id": ObjectId("654a691e5869000048006561"),
    name: "Giáo dục thể chất",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007543"),
    "subject_id": "lop8-hoatdongtrainghiem",
    "grade_id": ObjectId("654a691e5869000048006561"),
    name: "Hoạt động trải nghiệm – Hướng nghiệp",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007544"),
    "subject_id": "lop9-amnhacvamithuat",
    "grade_id": ObjectId("654a691e5869000048006562"),
    name: "Nghệ thuật",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007545"),
    "subject_id": "lop9-congnghe",
    "grade_id": ObjectId("654a691e5869000048006562"),
    name: "Công nghệ",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007546"),
    "subject_id": "lop9-diali",
    "grade_id": ObjectId("654a691e5869000048006562"),
    name: "Địa lí",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007547"),
    "subject_id": "lop9-giaoduccongdan",
    "grade_id": ObjectId("654a691e5869000048006562"),
    name: "Giáo dục công dân",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007548"),
    "subject_id": "lop9-hoahoc",
    "grade_id": ObjectId("654a691e5869000048006562"),
    name: "Hóa học",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007549"),
    "subject_id": "lop9-lichsu",
    "grade_id": ObjectId("654a691e5869000048006562"),
    name: "Lịch sử",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500754a"),
    "subject_id": "lop9-nguvan",
    "grade_id": ObjectId("654a691e5869000048006562"),
    name: "Ngữ văn",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500754b"),
    "subject_id": "lop9-sinhhoc",
    "grade_id": ObjectId("654a691e5869000048006562"),
    name: "Sinh học",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500754c"),
    "subject_id": "lop9-tienganh",
    "grade_id": ObjectId("654a691e5869000048006562"),
    name: "Ngoại ngữ",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500754d"),
    "subject_id": "lop9-tinhoc",
    "grade_id": ObjectId("654a691e5869000048006562"),
    name: "Tin học",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500754e"),
    "subject_id": "lop9-toanhoc",
    "grade_id": ObjectId("654a691e5869000048006562"),
    name: "Toán",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500754f"),
    "subject_id": "lop9-vatli",
    "grade_id": ObjectId("654a691e5869000048006562"),
    name: "Vật lí",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007550"),
    "subject_id": "lop9-lichsudiali",
    "grade_id": ObjectId("654a691e5869000048006562"),
    name: "Lịch sử và Địa lí",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007551"),
    "subject_id": "lop9-khoahoctunhien",
    "grade_id": ObjectId("654a691e5869000048006562"),
    name: "Khoa học tự nhiên",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007552"),
    "subject_id": "lop9-giaoducthechat",
    "grade_id": ObjectId("654a691e5869000048006562"),
    name: "Giáo dục thể chất",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007553"),
    "subject_id": "lop9-hoatdongtrainghiem",
    "grade_id": ObjectId("654a691e5869000048006562"),
    name: "Hoạt động trải nghiệm – Hướng nghiệp",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007554"),
    "subject_id": "lop10-congnghe",
    "grade_id": ObjectId("654a691e5869000048006563"),
    name: "Công nghệ",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007555"),
    "subject_id": "lop10-daiso",
    "grade_id": ObjectId("654a691e5869000048006563"),
    name: "Toán ",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007556"),
    "subject_id": "lop10-diali",
    "grade_id": ObjectId("654a691e5869000048006563"),
    name: "Địa lí",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007557"),
    "subject_id": "lop10-giaoduccongdan",
    "grade_id": ObjectId("654a691e5869000048006563"),
    name: "Giáo dục công dân",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007558"),
    "subject_id": "lop10-giaoducquocphonganninh",
    "grade_id": ObjectId("654a691e5869000048006563"),
    name: "Giáo dục quốc phòng và an ninh",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007559"),
    "subject_id": "lop10-hinhhoc",
    "grade_id": ObjectId("654a691e5869000048006563"),
    name: "Hình học",
    description: "Mô tả",
    status: false
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500755a"),
    "subject_id": "lop10-hoahoc",
    "grade_id": ObjectId("654a691e5869000048006563"),
    name: "Hóa học",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500755b"),
    "subject_id": "lop10-lichsu",
    "grade_id": ObjectId("654a691e5869000048006563"),
    name: "Lịch sử",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500755c"),
    "subject_id": "lop10-nguvan",
    "grade_id": ObjectId("654a691e5869000048006563"),
    name: "Ngữ văn",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500755d"),
    "subject_id": "lop10-sinhhoc",
    "grade_id": ObjectId("654a691e5869000048006563"),
    name: "Sinh học",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500755e"),
    "subject_id": "lop10-tienganh",
    "grade_id": ObjectId("654a691e5869000048006563"),
    name: "Ngoại ngữ",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500755f"),
    "subject_id": "lop10-tinhoc",
    "grade_id": ObjectId("654a691e5869000048006563"),
    name: "Tin học",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007560"),
    "subject_id": "lop10-vatli",
    "grade_id": ObjectId("654a691e5869000048006563"),
    name: "Vật lí",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007561"),
    "subject_id": "lop10-giaoducthechat",
    "grade_id": ObjectId("654a691e5869000048006563"),
    name: "Giáo dục thể chất",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007562"),
    "subject_id": "lop10-amnhac",
    "grade_id": ObjectId("654a691e5869000048006563"),
    name: "Âm nhạc",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007563"),
    "subject_id": "lop10-mithuat",
    "grade_id": ObjectId("654a691e5869000048006563"),
    name: "Mĩ Thuật",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007564"),
    "subject_id": "lop10-giaoduckinhtephapluat",
    "grade_id": ObjectId("654a691e5869000048006563"),
    name: "Giáo dục Kinh tế và pháp luật",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007565"),
    "subject_id": "lop11-congnghefalse",
    "grade_id": ObjectId("654a691e5869000048006564"),
    name: "Công nghệ",
    description: "Mô tả",
    status: false
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007566"),
    "subject_id": "lop11-daisovagiaitich",
    "grade_id": ObjectId("654a691e5869000048006564"),
    name: "Toán",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007567"),
    "subject_id": "lop11-congnghe",
    "grade_id": ObjectId("654a691e5869000048006564"),
    name: "Công nghệ",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007568"),
    "subject_id": "lop11-giaoduccongdan",
    "grade_id": ObjectId("654a691e5869000048006564"),
    name: "Giáo dục công dân",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007569"),
    "subject_id": "lop11-giaoducquocphonganninh",
    "grade_id": ObjectId("654a691e5869000048006564"),
    name: "Giáo dục quốc phòng an ninh",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500756a"),
    "subject_id": "lop11-hinhhoc",
    "grade_id": ObjectId("654a691e5869000048006564"),
    name: "Hình học",
    description: "Mô tả",
    status: false
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500756b"),
    "subject_id": "lop11-hoahoc",
    "grade_id": ObjectId("654a691e5869000048006564"),
    name: "Hóa học",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500756c"),
    "subject_id": "lop11-lichsu",
    "grade_id": ObjectId("654a691e5869000048006564"),
    name: "Lịch sử",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500756d"),
    "subject_id": "lop11-nguvan",
    "grade_id": ObjectId("654a691e5869000048006564"),
    name: "Ngữ văn",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500756e"),
    "subject_id": "lop11-sinhhoc",
    "grade_id": ObjectId("654a691e5869000048006564"),
    name: "Sinh học",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500756f"),
    "subject_id": "lop11-tienganh",
    "grade_id": ObjectId("654a691e5869000048006564"),
    name: "Ngoại Ngữ",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007570"),
    "subject_id": "lop11-tinhoc",
    "grade_id": ObjectId("654a691e5869000048006564"),
    name: "Tin học",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007571"),
    "subject_id": "lop11-vatli",
    "grade_id": ObjectId("654a691e5869000048006564"),
    name: "Vật lí",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007572"),
    "subject_id": "lop11-giaoducthechat",
    "grade_id": ObjectId("654a691e5869000048006564"),
    name: "Giáo dục thể chất",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007573"),
    "subject_id": "lop11-diali",
    "grade_id": ObjectId("654a691e5869000048006564"),
    name: "Địa lí",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007574"),
    "subject_id": "lop11-amnhac",
    "grade_id": ObjectId("654a691e5869000048006564"),
    name: "Âm nhạc",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007575"),
    "subject_id": "lop11-mithuat",
    "grade_id": ObjectId("654a691e5869000048006564"),
    name: "Mĩ Thuật",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007576"),
    "subject_id": "lop11-giaoduckinhtephapluat",
    "grade_id": ObjectId("654a691e5869000048006564"),
    name: "Giáo dục Kinh tế và pháp luật",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007577"),
    "subject_id": "lop12-congnghe",
    "grade_id": ObjectId("654a691e5869000048006565"),
    name: "Công nghệ",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007578"),
    "subject_id": "lop12-diali",
    "grade_id": ObjectId("654a691e5869000048006565"),
    name: "Địa lí",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007579"),
    "subject_id": "lop12-toanhoc",
    "grade_id": ObjectId("654a691e5869000048006565"),
    name: "Toán",
    description: "Giải tích",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500757a"),
    "subject_id": "lop12-giaoduccongdan",
    "grade_id": ObjectId("654a691e5869000048006565"),
    name: "Giáo dục công dân",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500757b"),
    "subject_id": "lop12-hinhhoc",
    "grade_id": ObjectId("654a691e5869000048006565"),
    name: "Hình học",
    description: "Mô tả",
    status: false
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500757c"),
    "subject_id": "lop12-hoahoc",
    "grade_id": ObjectId("654a691e5869000048006565"),
    name: "Hóa học",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500757d"),
    "subject_id": "lop12-lichsu",
    "grade_id": ObjectId("654a691e5869000048006565"),
    name: "Lịch sử",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500757e"),
    "subject_id": "lop12-nguvan",
    "grade_id": ObjectId("654a691e5869000048006565"),
    name: "Ngữ văn",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a10600007500757f"),
    "subject_id": "lop12-sinhhoc",
    "grade_id": ObjectId("654a691e5869000048006565"),
    name: "Sinh học",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007580"),
    "subject_id": "lop12-tienganh",
    "grade_id": ObjectId("654a691e5869000048006565"),
    name: "Ngoại ngữ",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007581"),
    "subject_id": "lop12-tinhoc ",
    "grade_id": ObjectId("654a691e5869000048006565"),
    name: "Tin học",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007582"),
    "subject_id": "lop12-vatli",
    "grade_id": ObjectId("654a691e5869000048006565"),
    name: "Vật lí",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007583"),
    "subject_id": "lop12-giaoducthechat",
    "grade_id": ObjectId("654a691e5869000048006565"),
    name: "Giáo dục thể chất",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007584"),
    "subject_id": "lop12-giaoducquocphonganninh",
    "grade_id": ObjectId("654a691e5869000048006565"),
    name: "Giáo dục quốc phòng an ninh",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007585"),
    "subject_id": "lop12-giaoduckinhtephapluat",
    "grade_id": ObjectId("654a691e5869000048006565"),
    name: "Giáo dục Kinh tế và pháp luật",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007586"),
    "subject_id": "lop12-amnhac",
    "grade_id": ObjectId("654a691e5869000048006565"),
    name: "Âm nhạc",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("656ded55a106000075007587"),
    "subject_id": "lop12-mithuat",
    "grade_id": ObjectId("654a691e5869000048006565"),
    name: "Mĩ Thuật",
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("65884fd3157200000d002804"),
    "subject_id": "chao-co",
    name: "Chào Cờ",
    "grade_id": null,
    description: "Mô tả",
    status: true
} ]);
db.getCollection("subjects").insert([ {
    _id: ObjectId("65884fe9157200000d002806"),
    "subject_id": "sinh-hoat",
    name: "Sinh hoạt",
    "grade_id": null,
    description: "Mô tả",
    status: true
} ]);

// ----------------------------
// Collection structure for t_account
// ----------------------------
db.getCollection("t_account").drop();
db.createCollection("t_account");

// ----------------------------
// Documents of t_account
// ----------------------------
db.getCollection("t_account").insert([ {
    _id: ObjectId("65427bd68912512bcf0cbd56"),
    "user_name": "admin",
    password: "$2b$10$VVSjhfD8Qmk2ctPaETL59eT6mxmAfFWUIzdQcgyhnzhHe5YLihN7e",
    "full_name": "Admin hệ thống",
    "role_key": "ADMIN",
    gender: NumberInt("1"),
    email: "22102001son+12345@gmail.com",
    phone: "0965140428",
    "birth_day": ISODate("2001-10-22T00:00:00.000Z")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("65427ffada3c207b0280d451"),
    "user_name": "son2210",
    password: "$2b$10$irP/ar5kn59VLR5O6RCG4.ooRcQZ.4MwzAikm9pc5kD0TRLht5gcm",
    "full_name": "Nguyễn Hải Sơn",
    phone: "0965140428",
    email: "22102001son@gmail.com",
    "registration_date": ISODate("2023-11-01T16:42:34.118Z"),
    "delete_at": null,
    "create_at": ISODate("2023-11-01T16:42:34.123Z"),
    "update_at": ISODate("2023-11-01T16:42:34.123Z"),
    __v: NumberInt("0"),
    "is_reset": false,
    "role_key": "TEACHER",
    "birth_day": ISODate("1970-01-01T00:00:00.000Z")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("655ce03e2458cb8f062d67dc"),
    "user_name": "son22102001",
    password: "$2b$10$Lzt6sn7K/CwsMJ.no9XtPuoAKvBo1WCvLlFXq0qHnRzXXAUO68QUS",
    "full_name": "Nguyễn Hải Sơn",
    email: "22102001son@gmail.com",
    "registration_date": ISODate("2023-11-21T16:52:14.429Z"),
    gender: NumberInt("1"),
    "role_key": "STUDENTS",
    "delete_at": null,
    "create_at": ISODate("2023-11-21T16:52:14.433Z"),
    "update_at": ISODate("2023-11-21T16:52:14.433Z"),
    __v: NumberInt("0"),
    "birth_day": ISODate("2005-10-22T00:00:00.000Z")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("655ce89002c939b1a423bda5"),
    "user_name": "nguyenvanb",
    password: "$2b$10$AayEu1SrjilelPgOsBcKyegxfMqotpqsx44g/nQAQY2I9GcSgx7JO",
    "full_name": "Nguyễn Văn B",
    "birth_day": ISODate("2005-10-30T00:00:00.000Z"),
    phone: "0965140428",
    email: "22102001son+1@gmail.com",
    "registration_date": ISODate("2023-11-21T17:27:44.488Z"),
    gender: NumberInt("1"),
    "role_key": "STUDENTS",
    "delete_at": ISODate("2023-12-14T16:12:42.949Z"),
    "create_at": ISODate("2023-11-21T17:27:44.491Z"),
    "update_at": ISODate("2023-11-21T17:27:44.491Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("655f71eb7fcfb053ebc08224"),
    "user_name": "test1",
    password: "$2b$10$WDWMY.jQBkJQy5N5lxqRVenHnr0taDpUhzI9of2E1qVgG8LY2iDuW",
    "full_name": "Nguyễn Văn B",
    email: "22102001son+12@gmail.com",
    "registration_date": ISODate("2023-11-23T15:38:19.243Z"),
    gender: NumberInt("1"),
    "role_key": "STUDENTS",
    "delete_at": null,
    "create_at": ISODate("2023-11-23T15:38:19.246Z"),
    "update_at": ISODate("2023-11-23T15:38:19.246Z"),
    __v: NumberInt("0"),
    "birth_day": ISODate("1970-01-01T00:00:00.000Z")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("655f82443fcebd5dc87340ea"),
    "user_name": "baove1",
    password: "$2b$10$smuQ7Az6W1zND1S68Unxq.7kXVX05bJrfRSLDBVWaFjyfmO2llK9K",
    "full_name": "Lê Thị Thúy",
    phone: "0965140428",
    "registration_date": ISODate("2023-11-23T16:48:04.196Z"),
    "role_key": "TEACHER",
    "delete_at": ISODate("2023-11-23T17:10:36.163Z"),
    "create_at": ISODate("2023-11-23T16:48:04.199Z"),
    "update_at": ISODate("2023-11-23T16:48:04.199Z"),
    __v: NumberInt("0"),
    "birth_day": ISODate("1970-01-01T00:00:00.000Z")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("655f87acf48a9694ad3e61e1"),
    "user_name": "baove1",
    password: "$2b$10$ErsPnJG.Nj0Brs5L/4vvb.Z7aWjjfrtW5JjRK3L4JW9nFSNJzsp6y",
    "full_name": "Lê Thị Q",
    "birth_day": ISODate("2023-11-07T00:00:00.000Z"),
    phone: "0965140428",
    "registration_date": ISODate("2023-11-23T17:11:08.421Z"),
    "delete_at": null,
    "create_at": ISODate("2023-11-23T17:11:08.424Z"),
    "update_at": ISODate("2023-11-23T17:11:08.424Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("655f88e0f48a9694ad3e6215"),
    "user_name": "baove12",
    password: "$2b$10$QmM0.Pn0H.uPuAoQWn0yJeTjKKqmiA4AyMQVK1Toxytg9tEtZAdAy",
    "full_name": "Nguyễn Hải Sơn",
    "birth_day": ISODate("2023-11-07T00:00:00.000Z"),
    phone: "0965140428",
    email: "22102001son+1234@gmail.com",
    "registration_date": ISODate("2023-11-23T17:16:16.745Z"),
    gender: NumberInt("1"),
    "role_key": "SERCURITY",
    "delete_at": null,
    "create_at": ISODate("2023-11-23T17:16:16.746Z"),
    "update_at": ISODate("2023-11-23T17:16:16.746Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("655f93b7eecd22748dd28762"),
    password: "$2b$10$nfuOZxAvrooMuc66j.SrFOVdXg14Bk.tfIc/1BKUdiDIyiXEHent.",
    "full_name": "Lê Thị Q",
    phone: "0965140428",
    email: "22102001son+123@gmail.com",
    "registration_date": ISODate("2023-11-23T18:02:31.758Z"),
    gender: NumberInt("1"),
    "role_key": "TEACHER",
    "delete_at": null,
    "create_at": ISODate("2023-11-23T18:02:31.762Z"),
    "update_at": ISODate("2023-11-23T18:02:31.762Z"),
    __v: NumberInt("0"),
    "user_name": "giaovien1",
    "birth_day": ISODate("1970-01-01T00:00:00.000Z")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6561eb555c710ca9c348f98c"),
    "user_name": "giaovien2",
    password: "$2b$10$6Bo6Ik6vU2E64SqSZrlaI.q6/9sPD3GaJczrVi8B2Opb9FVCtF1x6",
    "full_name": "Nguyễn Hải Sơn",
    email: "22102001son+1234@gmail.com",
    "registration_date": ISODate("2023-11-25T12:40:53.108Z"),
    gender: NumberInt("1"),
    "role_key": "TEACHER",
    "delete_at": null,
    "create_at": ISODate("2023-11-25T12:40:53.108Z"),
    "update_at": ISODate("2023-11-25T12:40:53.108Z"),
    __v: NumberInt("0"),
    "birth_day": ISODate("1970-01-01T00:00:00.000Z")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("656f3845a691514470f6cbf8"),
    "user_name": "toanhs1",
    password: "$2b$10$epuk76yeXaOhXx1cKC8JGuzG5ehev6GM2Vk77cgnaIGrFuNadjo7K",
    "full_name": "Nguyễn Hải Sơn",
    phone: "0965140428",
    email: "22102001son+1@gmail.com",
    "registration_date": ISODate("2023-12-05T14:48:37.088Z"),
    gender: NumberInt("1"),
    "delete_at": ISODate("2023-12-14T17:20:23.256Z"),
    "create_at": ISODate("2023-12-05T14:48:37.089Z"),
    "update_at": ISODate("2023-12-05T14:48:37.089Z"),
    __v: NumberInt("0"),
    "role_key": "TEACHER2",
    "birth_day": ISODate("1997-10-22T00:00:00.000Z")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6570bce79f0be15ef8c0a114"),
    "user_name": "ngoaingu1",
    password: "$2b$10$UzZv3YvwMNB2vhCDAbu4le2JCxSKS7W8b/L14SRrCfxdWTpeDmupe",
    "full_name": "Lê Thị Thúy",
    phone: "0965140428",
    email: "22102001son+2@gmail.com",
    "registration_date": ISODate("2023-12-06T18:26:47.36Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-06T18:26:47.363Z"),
    "update_at": ISODate("2023-12-06T18:26:47.363Z"),
    __v: NumberInt("0"),
    "birth_day": ISODate("2001-10-22T00:00:00.000Z")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6570becdfaf42e92d6c9d2d0"),
    "user_name": "tienganh2",
    password: "$2b$10$CIDM.N/KHPDV3ZhWD2RB8etH0ct.PsuMhIu6gjMw0dF7utftwRlBm",
    "full_name": "Lê Thị Q",
    phone: "0965140428",
    email: "22102001son+3@gmail.com",
    "registration_date": ISODate("2023-12-06T18:34:53.121Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-06T18:34:53.124Z"),
    "update_at": ISODate("2023-12-06T18:34:53.124Z"),
    __v: NumberInt("0"),
    "birth_day": ISODate("1968-01-01T00:00:00.000Z")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6571db597d5437cf3cd6add3"),
    "user_name": "test2",
    password: "$2b$10$xumZIHwFYBB6Fr3wVxDreeRHOYI4hszPwE77rPVnawFgGoxQCPmu6",
    "full_name": "Lê  Văn Qw",
    "birth_day": ISODate("2023-12-05T00:00:00.000Z"),
    phone: "0965140428",
    email: "22102001son+4@gmail.com",
    "registration_date": ISODate("2023-12-07T14:48:57.499Z"),
    gender: NumberInt("1"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-07T14:48:57.5Z"),
    "update_at": ISODate("2023-12-07T14:48:57.5Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edaa70b6146071df7988"),
    "user_name": "gv0001",
    password: "$2b$10$JnKnG3HsNeIGkFS17tSYu.I4R5tn3OH4soNv/wKoTdX4I3HeZuGdG",
    "full_name": "Hoàng Thanh Hiền",
    "birth_day": ISODate("1980-05-28T00:00:00.000Z"),
    phone: "0123456789",
    email: "hoangthanhhien.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:14.004Z"),
    gender: NumberInt("1"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:14.007Z"),
    "update_at": ISODate("2023-12-13T17:45:14.007Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb370b6146071df7990"),
    "user_name": "gv0002",
    password: "$2b$10$wkpHozt7.uw5DCZsaT73zunbUR//5Ub3zVeqJ4oDW.Xqa32s5mHK.",
    "full_name": "Đinh Thị Đào",
    "birth_day": ISODate("1980-05-26T00:00:00.000Z"),
    phone: "0123456790",
    email: "dinhthidao@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:23.453Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:23.453Z"),
    "update_at": ISODate("2023-12-13T17:45:23.453Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb370b6146071df7998"),
    "user_name": "gv0003",
    password: "$2b$10$Tf/PcUMWlCWFn6GQQtWihuIvAnrRDZH3HnSze1MWm7.ZZCtrtPMk.",
    "full_name": "Vũ Thị Hảo",
    "birth_day": ISODate("1980-10-15T00:00:00.000Z"),
    phone: "0123456791",
    email: "vuthihao.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:23.539Z"),
    gender: NumberInt("1"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:23.539Z"),
    "update_at": ISODate("2023-12-13T17:45:23.539Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb370b6146071df799e"),
    "user_name": "gv0004",
    password: "$2b$10$eD23HyBiE7W0cw6t3A5VBOhYVyLK7lq6m0ZY1mBsp7eiPluEKoh46",
    "full_name": "Nguyễn Thị Thu",
    "birth_day": ISODate("1980-03-28T00:00:00.000Z"),
    phone: "0123456792",
    email: "nguyenthithu.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:23.704Z"),
    gender: NumberInt("1"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:23.705Z"),
    "update_at": ISODate("2023-12-13T17:45:23.705Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb370b6146071df79a6"),
    "user_name": "gv0005",
    password: "$2b$10$22c5rs4a8V7cjG2ywZ1Ud.8mcXgvvfUZGt8PfX/knH2MuZtCZ.4ei",
    "full_name": "Vũ Thị Thu Hương",
    "birth_day": ISODate("1980-04-10T00:00:00.000Z"),
    phone: "0123456793",
    email: "vuthithuhuong.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:23.794Z"),
    gender: NumberInt("1"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:23.795Z"),
    "update_at": ISODate("2023-12-13T17:45:23.795Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb370b6146071df79ac"),
    "user_name": "gv0006",
    password: "$2b$10$AQ/W.S.Ajw15GMVvWAk2IOkXjCap6y6bzqRPstiaJeqXy/2ilw39O",
    "full_name": "Nguyễn Thị Kiều Oanh",
    "birth_day": ISODate("1980-11-18T00:00:00.000Z"),
    phone: "0123456794",
    email: "nguyenthikieuoanh.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:23.878Z"),
    gender: NumberInt("1"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:23.878Z"),
    "update_at": ISODate("2023-12-13T17:45:23.878Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb370b6146071df79b2"),
    "user_name": "gv0007",
    password: "$2b$10$88gtm5uiB0OMI8A6aPMPA.x/Iu4AJbzBbY9FnbAktNijtqsy3HHJi",
    "full_name": "Nguyễn Thị Kim Dung",
    "birth_day": ISODate("1980-06-13T00:00:00.000Z"),
    phone: "0123456795",
    email: "nguyenthikimdung.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:23.96Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:23.96Z"),
    "update_at": ISODate("2023-12-13T17:45:23.96Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb470b6146071df79ba"),
    "user_name": "gv0008",
    password: "$2b$10$9ExA3vTxZTjwnBKWwNeFQ.nMPW0Og6EblAl5vXaKb5rq14V0.5dim",
    "full_name": "Trần Đức Lộc",
    "birth_day": ISODate("1980-09-18T00:00:00.000Z"),
    phone: "0123456796",
    email: "tranducloc.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:24.045Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:24.045Z"),
    "update_at": ISODate("2023-12-13T17:45:24.045Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb470b6146071df79c0"),
    "user_name": "gv0009",
    password: "$2b$10$sfmvFh1slm43WHFS51GJieSEG6gN/O3CgwivAcAi/FagwRe8MDjGu",
    "full_name": "Đinh Thị Tuyết Mai",
    "birth_day": ISODate("1980-02-09T00:00:00.000Z"),
    phone: "0123456797",
    email: "dinhthituyetmai.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:24.132Z"),
    gender: NumberInt("1"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:24.132Z"),
    "update_at": ISODate("2023-12-13T17:45:24.132Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb470b6146071df79c8"),
    "user_name": "gv0010",
    password: "$2b$10$kRC5ySHIDPgmjOgr/YdWWenFdsdCIE/amEc1EyELHku9c3cBNu4Ii",
    "full_name": "Nguyễn Đại Hảo",
    "birth_day": ISODate("1980-11-14T00:00:00.000Z"),
    phone: "0123456798",
    email: "nguyendaihao.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:24.223Z"),
    gender: NumberInt("1"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:24.224Z"),
    "update_at": ISODate("2023-12-13T17:45:24.224Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb470b6146071df79d0"),
    "user_name": "gv0011",
    password: "$2b$10$/9M7Uk9e.SK6louVRMHMCOhK.FU7W4hW1Y9xqBmTq52iLzy/c6j1G",
    "full_name": "Ngô Công Giang",
    "birth_day": ISODate("1980-11-29T00:00:00.000Z"),
    phone: "0123456799",
    email: "ngoconggiang.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:24.315Z"),
    gender: NumberInt("1"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:24.315Z"),
    "update_at": ISODate("2023-12-13T17:45:24.315Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb470b6146071df79d8"),
    "user_name": "gv0012",
    password: "$2b$10$skMQEE1ihp4R3zNTfFMa2euqy17./YJ0GpjoYc1DAqP0zVHq.8dOu",
    "full_name": "Ngô Vương Quyền",
    "birth_day": ISODate("1980-06-16T00:00:00.000Z"),
    phone: "0123456800",
    email: "ngovuongquyen.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:24.401Z"),
    gender: NumberInt("1"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:24.402Z"),
    "update_at": ISODate("2023-12-13T17:45:24.402Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb470b6146071df79e0"),
    "user_name": "gv0013",
    password: "$2b$10$qSxkGcJ3tUR4Be1w7WVVFuD/whfEBLXEKMVmzvqtdy1J8vvh7AmWe",
    "full_name": "Trịnh Thị Hương",
    "birth_day": ISODate("1980-02-07T00:00:00.000Z"),
    phone: "0123456801",
    email: "trinhthihuong.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:24.484Z"),
    gender: NumberInt("1"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:24.485Z"),
    "update_at": ISODate("2023-12-13T17:45:24.485Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb470b6146071df79e8"),
    "user_name": "gv0014",
    password: "$2b$10$UjTNn8xLE5pdN0Bhcn067uYOWFxXFMZWS3dCIco7ayzOGkUdo5nse",
    "full_name": "Huỳnh Thị Bích Hòa",
    "birth_day": ISODate("1980-10-17T00:00:00.000Z"),
    phone: "0123456802",
    email: "huynhthibichhoa.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:24.573Z"),
    gender: NumberInt("1"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:24.573Z"),
    "update_at": ISODate("2023-12-13T17:45:24.573Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb470b6146071df79f0"),
    "user_name": "gv0015",
    password: "$2b$10$1Jhzs9gqKnt.ngkj2HF10.I5KAL//TzC6HmSbfsLgNIIR9e5qnwUe",
    "full_name": "Bản Trong",
    "birth_day": ISODate("1980-01-29T00:00:00.000Z"),
    phone: "0123456803",
    email: "bantrong.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:24.656Z"),
    gender: NumberInt("1"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:24.657Z"),
    "update_at": ISODate("2023-12-13T17:45:24.657Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb470b6146071df79f8"),
    "user_name": "gv0016",
    password: "$2b$10$cOfVoLdGvbYzpkya11VkCexCN/QuYVi4gdr.E0RvjfLPSKGKpz1p.",
    "full_name": "Nguyễn Thị Thắng",
    "birth_day": ISODate("1980-10-28T00:00:00.000Z"),
    phone: "0123456804",
    email: "nguyenthithang.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:24.737Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:24.737Z"),
    "update_at": ISODate("2023-12-13T17:45:24.737Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb470b6146071df7a00"),
    "user_name": "gv0017",
    password: "$2b$10$zfvfKA3R1WGwqqqh8Ijsy.PiWUrH6t0U771gMQwN/pXKW7ww5bROW",
    "full_name": "Trần Hữu Hưng",
    "birth_day": ISODate("1980-05-20T00:00:00.000Z"),
    phone: "0123456805",
    email: "tranhuuhung.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:24.819Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:24.819Z"),
    "update_at": ISODate("2023-12-13T17:45:24.819Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb470b6146071df7a08"),
    "user_name": "gv0018",
    password: "$2b$10$C71A7NbKa5QlftjiXRfbUeyHv/qpb7gXdmJqAkjIs6jeedKKSgetC",
    "full_name": "Hồ Thị Mỹ Chung",
    "birth_day": ISODate("1980-02-14T00:00:00.000Z"),
    phone: "0123456806",
    email: "hothimychung.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:24.905Z"),
    gender: NumberInt("1"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:24.905Z"),
    "update_at": ISODate("2023-12-13T17:45:24.905Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb470b6146071df7a0e"),
    "user_name": "gv0019",
    password: "$2b$10$VAHun6lU5knv6waJuSEatOOVBCs66zgXy2CZsTzLgfCCzlGZI12by",
    "full_name": "Vũ Quang Sơn",
    "birth_day": ISODate("1980-07-02T00:00:00.000Z"),
    phone: "0123456807",
    email: "vuquangson.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:24.997Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:24.997Z"),
    "update_at": ISODate("2023-12-13T17:45:24.997Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb570b6146071df7a16"),
    "user_name": "gv0020",
    password: "$2b$10$yLwc0OHuedwR0yBGnFzwYuG/15dvbYlzo.fJqF7QC63I4YGD/HB46",
    "full_name": "Trần Nam Chính",
    "birth_day": ISODate("1980-09-14T00:00:00.000Z"),
    phone: "0123456808",
    email: "trannamchinh.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:25.088Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:25.088Z"),
    "update_at": ISODate("2023-12-13T17:45:25.088Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb570b6146071df7a1c"),
    "user_name": "gv0021",
    password: "$2b$10$3H2Oz3oalXZORV64EjHuCugdGCAzO6lDd0vnKACjPfBjc9LITDVEi",
    "full_name": "Phạm Thị Hằng",
    "birth_day": ISODate("1980-02-19T00:00:00.000Z"),
    phone: "0123456809",
    email: "phamthihang.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:25.186Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:25.186Z"),
    "update_at": ISODate("2023-12-13T17:45:25.186Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb570b6146071df7a22"),
    "user_name": "gv0022",
    password: "$2b$10$J5DWx7XxzPJfAEv/NEWt.uqMJCuEqUOLei.yfqGvS/IJH4YsF7xSu",
    "full_name": "Văn Minh Dương",
    "birth_day": ISODate("1980-08-13T00:00:00.000Z"),
    phone: "0123456810",
    email: "vanminhduong.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:25.275Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:25.276Z"),
    "update_at": ISODate("2023-12-13T17:45:25.276Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb570b6146071df7a2a"),
    "user_name": "gv0023",
    password: "$2b$10$ILKRsRQDrZDbAnN6mcwVbO7LrdkZ9C3LsInyvAewsQAcuKQFBeOAm",
    "full_name": "Đặng Thị Vân Hà",
    "birth_day": ISODate("1981-08-13T00:00:00.000Z"),
    phone: "0123456811",
    email: "dangthivanha.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:25.361Z"),
    gender: NumberInt("1"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:25.362Z"),
    "update_at": ISODate("2023-12-13T17:45:25.362Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb570b6146071df7a30"),
    "user_name": "gv0024",
    password: "$2b$10$mZExKSNC9oAPYcYCggPr5OQIfvV1RLBQed0c/QvKvaIylNGDEI6VS",
    "full_name": "Trần Trung Sơn",
    "birth_day": ISODate("1982-08-13T00:00:00.000Z"),
    phone: "0123456812",
    email: "trantrungson.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:25.45Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:25.45Z"),
    "update_at": ISODate("2023-12-13T17:45:25.45Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb570b6146071df7a38"),
    "user_name": "gv0025",
    password: "$2b$10$NSOJUartOv3U7kkqMl0k3uKu8ROctyM4aG8iXMRZOO5uQghO5M5YW",
    "full_name": "Vũ Duy Bảo",
    "birth_day": ISODate("1983-08-13T00:00:00.000Z"),
    phone: "0123456813",
    email: "vuduybao.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:25.539Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:25.539Z"),
    "update_at": ISODate("2023-12-13T17:45:25.539Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb570b6146071df7a40"),
    "user_name": "gv0026",
    password: "$2b$10$7GLJ1yDB5rztkVYbTdwKAOVS/DZvPzlfeNp5Hl5V7FQcCZvgJqQUG",
    "full_name": "Nguyễn Thu Trang",
    "birth_day": ISODate("1984-08-13T00:00:00.000Z"),
    phone: "0123456814",
    email: "nguyenthutrang.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:25.631Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:25.632Z"),
    "update_at": ISODate("2023-12-13T17:45:25.632Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb570b6146071df7a48"),
    "user_name": "gv0027",
    password: "$2b$10$wwrXgutIGD7Rse2OZRKfy.rnb.i5Y0W2kZIo93.QtcX8ifXqWENZe",
    "full_name": "Vũ Ngọc Minh",
    "birth_day": ISODate("1985-08-13T00:00:00.000Z"),
    phone: "0123456815",
    email: "vungocminh.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:25.724Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:25.724Z"),
    "update_at": ISODate("2023-12-13T17:45:25.724Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb570b6146071df7a50"),
    "user_name": "gv0028",
    password: "$2b$10$tdgJCym9Ueh938L7pAECL.kkEO5BM4ddfyd5l.bwHsR4u/.C.3PeS",
    "full_name": "Gene",
    "birth_day": ISODate("1986-08-13T00:00:00.000Z"),
    phone: "0123456816",
    email: "gene.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:25.817Z"),
    gender: NumberInt("1"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:25.818Z"),
    "update_at": ISODate("2023-12-13T17:45:25.818Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb570b6146071df7a58"),
    "user_name": "gv0029",
    password: "$2b$10$vcDTnuxkagB1Bmed4O2CE.gx6TyOgVRnRvzB.pyU1tmoAjdOyod5i",
    "full_name": "Nguyễn Ngọc Dũng",
    "birth_day": ISODate("1987-08-13T00:00:00.000Z"),
    phone: "0123456817",
    email: "nguyenngocdung.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:25.901Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:25.901Z"),
    "update_at": ISODate("2023-12-13T17:45:25.901Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb570b6146071df7a60"),
    "user_name": "gv0030",
    password: "$2b$10$Yye5ONqR7QnObyTHPGIcG.YjsTClQHcigYtjiOfK0Gil5StxPPgtW",
    "full_name": "Hoàng T.Thanh Thủy",
    "birth_day": ISODate("1988-08-13T00:00:00.000Z"),
    phone: "0123456818",
    email: "hoangt.thanhthuy.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:25.987Z"),
    gender: NumberInt("1"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:25.987Z"),
    "update_at": ISODate("2023-12-13T17:45:25.987Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb670b6146071df7a68"),
    "user_name": "gv0031",
    password: "$2b$10$XtADh4GpoElbnwcsOQV/2.HZpyKSPhvcDJt2us2q2lkyXZCEFnKF.",
    "full_name": "Đặng Thị Thanh Hiền",
    "birth_day": ISODate("1989-08-13T00:00:00.000Z"),
    phone: "0123456819",
    email: "dangthithanhhien.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:26.073Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:26.073Z"),
    "update_at": ISODate("2023-12-13T17:45:26.073Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb670b6146071df7a6e"),
    "user_name": "gv0032",
    password: "$2b$10$B57fKp9X.ogqzcn0r7ihlODzQfLYu9Q82t1CqicQId/UlWf3gFjri",
    "full_name": "Nguyễn Thị Hồng Thắm",
    "birth_day": ISODate("1990-08-13T00:00:00.000Z"),
    phone: "0123456820",
    email: "nguyenthihongtham.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:26.159Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:26.16Z"),
    "update_at": ISODate("2023-12-13T17:45:26.16Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb670b6146071df7a76"),
    "user_name": "gv0033",
    password: "$2b$10$HimIQvoLc.WaWZmtUIpdeOyCIjNT/bglsJvBBgclCGirNW4XL6sk2",
    "full_name": "Phan Thị Thủy",
    "birth_day": ISODate("1980-04-10T00:00:00.000Z"),
    phone: "0123456821",
    email: "phanthithuy.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:26.241Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:26.241Z"),
    "update_at": ISODate("2023-12-13T17:45:26.241Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb670b6146071df7a7e"),
    "user_name": "gv0034",
    password: "$2b$10$S1hzDx6Z81SUZL.VB5xnp.0JGy1L9N9ACDBN2JaYZ/A/GgQTkiMNS",
    "full_name": "Nguyễn Thị Sâm",
    "birth_day": ISODate("1992-08-13T00:00:00.000Z"),
    phone: "0123456822",
    email: "nguyenthisam.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:26.341Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:26.341Z"),
    "update_at": ISODate("2023-12-13T17:45:26.341Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb670b6146071df7a86"),
    "user_name": "gv0035",
    password: "$2b$10$JMNUaCytgHOnhoQYWOd.W.zA2XQfy02fR/fSknxtx..fYwCqVN.k6",
    "full_name": "Nguyễn Thị Mến",
    "birth_day": ISODate("1993-08-13T00:00:00.000Z"),
    phone: "0123456823",
    email: "nguyenthimen.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:26.431Z"),
    gender: NumberInt("1"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:26.431Z"),
    "update_at": ISODate("2023-12-13T17:45:26.431Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb670b6146071df7a8c"),
    "user_name": "gv0036",
    password: "$2b$10$bv0zsDSJ79X0FW4BNYcBw.CzJ5pAPLzhmqRRS1iSWXOpaRFMJJdYa",
    "full_name": "Nguyễn Thị Hiên",
    "birth_day": ISODate("1994-08-13T00:00:00.000Z"),
    phone: "0123456824",
    email: "nguyenthihien.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:26.517Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:26.517Z"),
    "update_at": ISODate("2023-12-13T17:45:26.517Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb670b6146071df7a92"),
    "user_name": "gv0037",
    password: "$2b$10$BHkHhY8qgsMNGlcXyEZ03e2Dnq0hodPOmM7OuRLZVDtpyVmHQRede",
    "full_name": "Vũ Minh Phương",
    "birth_day": ISODate("1995-08-13T00:00:00.000Z"),
    phone: "0123456825",
    email: "vuminhphuong.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:26.602Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:26.602Z"),
    "update_at": ISODate("2023-12-13T17:45:26.602Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb670b6146071df7a98"),
    "user_name": "gv0038",
    password: "$2b$10$FjuC3zf/tpWfq72AhiDweuA8bokbCnWZHfNNDQK5B2nvc5ND8NG0e",
    "full_name": "Nguyễn Thúy Nga",
    "birth_day": ISODate("1996-08-13T00:00:00.000Z"),
    phone: "0123456826",
    email: "nguyenthuynga.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:26.691Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:26.691Z"),
    "update_at": ISODate("2023-12-13T17:45:26.691Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb670b6146071df7a9e"),
    "user_name": "gv0039",
    password: "$2b$10$cLzcspNCkmoI1RYXFhXV2.JjoPxQ34vI/2lp.qtkmBWSrXjBp5Bem",
    "full_name": "Nguyễn Thị Kim Liên",
    "birth_day": ISODate("1980-04-10T00:00:00.000Z"),
    phone: "0123456827",
    email: "nguyenthikimlien.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:26.777Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:26.778Z"),
    "update_at": ISODate("2023-12-13T17:45:26.778Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb670b6146071df7aa6"),
    "user_name": "gv0040",
    password: "$2b$10$eoeQ7EaEDVVy6O.Vggi2xOACdz7Sp4FzRE4ckF2xv9W9jWEOvBeAO",
    "full_name": "Đặng Thị Đào",
    "birth_day": ISODate("1981-04-10T00:00:00.000Z"),
    phone: "0123456828",
    email: "dangthidao.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:26.86Z"),
    gender: NumberInt("1"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:26.86Z"),
    "update_at": ISODate("2023-12-13T17:45:26.86Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb670b6146071df7aae"),
    "user_name": "gv0041",
    password: "$2b$10$y611TwISFpbNCnryzOVD2ueAqB1CN2FqNNMVGR9xIaO64hE4XCco2",
    "full_name": "Đinh Thị Thu",
    "birth_day": ISODate("1982-04-10T00:00:00.000Z"),
    phone: "0123456829",
    email: "dinhthithu.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:26.942Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:26.943Z"),
    "update_at": ISODate("2023-12-13T17:45:26.943Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb770b6146071df7ab6"),
    "user_name": "gv0042",
    password: "$2b$10$xparZoSpcSNInISrtQE5IeFAeXd6j/5qTLkoy9ySHKHAcufN.bz3e",
    "full_name": "Đặng Thị Mai",
    "birth_day": ISODate("1983-04-10T00:00:00.000Z"),
    phone: "0123456830",
    email: "dangthimai.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:27.024Z"),
    gender: NumberInt("1"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:27.024Z"),
    "update_at": ISODate("2023-12-13T17:45:27.024Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb770b6146071df7abe"),
    "user_name": "gv0043",
    password: "$2b$10$fXOM8hVu66h.3BAgMsI1O.sLEB2SdXO8j0.BVSxgb65v9XSMX3faS",
    "full_name": "Đinh T Cẩm Vân",
    "birth_day": ISODate("1984-04-10T00:00:00.000Z"),
    phone: "0123456831",
    email: "dinhtcamvan.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:27.109Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:27.109Z"),
    "update_at": ISODate("2023-12-13T17:45:27.109Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb770b6146071df7ac6"),
    "user_name": "gv0044",
    password: "$2b$10$uZeLTarZed5PMj6LrNWXtOwPeIqnKXkm/PkQtN6ahTNEu/4jVwYFC",
    "full_name": "Nguyễn Trọng Hoan",
    "birth_day": ISODate("1985-04-10T00:00:00.000Z"),
    phone: "0123456832",
    email: "nguyentronghoan.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:27.193Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:27.194Z"),
    "update_at": ISODate("2023-12-13T17:45:27.194Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb770b6146071df7ace"),
    "user_name": "gv0045",
    password: "$2b$10$asgQUrETQyeEJBgp0fLTVuZRLz07uUK6z.s3MFqCbcdWqbxotFhKK",
    "full_name": "Lê Thị Hòa",
    "birth_day": ISODate("1986-04-10T00:00:00.000Z"),
    phone: "0123456833",
    email: "lethihoa.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:27.274Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:27.274Z"),
    "update_at": ISODate("2023-12-13T17:45:27.274Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb770b6146071df7ad6"),
    "user_name": "gv0046",
    password: "$2b$10$OF92axiuGywaCrRyJGIt3e7i/elrQs6hc3WtlmHHuufIzffBl/g3e",
    "full_name": "Nguyễn Ngọc Cương",
    "birth_day": ISODate("1987-04-10T00:00:00.000Z"),
    phone: "0123456834",
    email: "nguyenngoccuong.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:27.364Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:27.364Z"),
    "update_at": ISODate("2023-12-13T17:45:27.364Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb770b6146071df7ade"),
    "user_name": "gv0047",
    password: "$2b$10$uR5fRvosdxHCXTVe4DSymuYTKPldV8vdYUJmfzZDPVrJ/PeEi3Uee",
    "full_name": "Nguyễn Đắc Mạnh",
    "birth_day": ISODate("1988-04-10T00:00:00.000Z"),
    phone: "0123456835",
    email: "nguyendacmanh.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:27.457Z"),
    gender: NumberInt("1"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:27.457Z"),
    "update_at": ISODate("2023-12-13T17:45:27.457Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb770b6146071df7ae6"),
    "user_name": "gv0048",
    password: "$2b$10$AbVN5PgRM0bH8xiQn49xiOS6QbznYC2enQOrLGzVBe4tsPh2ct9hm",
    "full_name": "Nguyen Thi Kim Lien",
    "birth_day": ISODate("1989-04-10T00:00:00.000Z"),
    phone: "0123456836",
    email: "nguyenthikimlien.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:27.541Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:27.541Z"),
    "update_at": ISODate("2023-12-13T17:45:27.541Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579edb770b6146071df7aee"),
    "user_name": "gv0049",
    password: "$2b$10$5.uNysotrk0jRmiGSgyjge.3MF8nX2RxQLZjp3i8MKi/BNxpXcaTm",
    "full_name": "Đinh Thi Thu",
    "birth_day": ISODate("1990-04-10T00:00:00.000Z"),
    phone: "0123456837",
    email: "dinhthithu.@gmail.com",
    "registration_date": ISODate("2023-12-13T17:45:27.632Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T17:45:27.633Z"),
    "update_at": ISODate("2023-12-13T17:45:27.633Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579f266f20069ea4c4f7bdc"),
    "user_name": "lechian2008",
    password: "$2b$10$wc1mEIF6wLxxoHiirct/POoosSCgqYCZ1X3TCycxgZtfeI4PVAPDG",
    "full_name": "Lê Chí An",
    "birth_day": ISODate("2008-05-28T00:00:00.000Z"),
    email: "phuhuynhhoangthanhhien@gmail.com",
    "registration_date": ISODate("2023-12-13T18:05:26.2Z"),
    gender: NumberInt("1"),
    "role_key": "STUDENTS",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T18:05:26.203Z"),
    "update_at": ISODate("2023-12-13T18:05:26.203Z"),
    __v: NumberInt("0"),
    phone: "0965140428"
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579f266f20069ea4c4f7be5"),
    "user_name": "hothihoanganh2008",
    password: "$2b$10$ttQ7pLU08e0aaL55Fkoxw./cvFGXHMnNLSQGqk3D2SKXwhCXayPHW",
    "full_name": "Hồ Thị Hoàng Anh",
    "birth_day": ISODate("2008-05-26T00:00:00.000Z"),
    email: "phuhuynhdinhthidao.@gmail.com",
    "registration_date": ISODate("2023-12-13T18:05:26.435Z"),
    gender: NumberInt("2"),
    "role_key": "STUDENTS",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T18:05:26.435Z"),
    "update_at": ISODate("2023-12-13T18:05:26.435Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579f266f20069ea4c4f7bee"),
    "user_name": "nguyenvanchicuong2008",
    password: "$2b$10$5DUM9alZ3ewKLeDxXyGZ6eOCIYGHpSyQIL/tf1HWshLMQwUulh2j.",
    "full_name": "Nguyễn Văn Chí Cường",
    "birth_day": ISODate("2008-10-15T00:00:00.000Z"),
    email: "phuhuynhvuthihao.@gmail.com",
    "registration_date": ISODate("2023-12-13T18:05:26.518Z"),
    gender: NumberInt("1"),
    "role_key": "STUDENTS",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T18:05:26.518Z"),
    "update_at": ISODate("2023-12-13T18:05:26.518Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579f266f20069ea4c4f7bf7"),
    "user_name": "phanthanhdat2008",
    password: "$2b$10$0C1h9.0OAtZH0BBKYjcr8O36YDy6ixin6.mv/DGNIaJlXflKV5nge",
    "full_name": "Phan Thành Đạt",
    "birth_day": ISODate("2008-03-28T00:00:00.000Z"),
    email: "phuhuynhnguyenthithu.@gmail.com",
    "registration_date": ISODate("2023-12-13T18:05:26.598Z"),
    gender: NumberInt("1"),
    "role_key": "STUDENTS",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T18:05:26.598Z"),
    "update_at": ISODate("2023-12-13T18:05:26.598Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579f266f20069ea4c4f7c00"),
    "user_name": "tranducduy2008",
    password: "$2b$10$ijpmt2xn4KdQO1NwseXx7OsEmUFnt5m2Yb5YMK4Z8GJ5Bj/eeoTEe",
    "full_name": "Trần Đức Duy",
    "birth_day": ISODate("2008-04-10T00:00:00.000Z"),
    email: "phuhuynhvuthithuhuong.@gmail.com",
    "registration_date": ISODate("2023-12-13T18:05:26.677Z"),
    gender: NumberInt("1"),
    "role_key": "STUDENTS",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T18:05:26.678Z"),
    "update_at": ISODate("2023-12-13T18:05:26.678Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579f266f20069ea4c4f7c09"),
    "user_name": "nguyenhoangleduy2008",
    password: "$2b$10$QRw05COi5P4JhZqbO14yoe1Llm4CYb3H37.fgSDA14gNh/RO72k..",
    "full_name": "Nguyễn Hoàng Lê Duy",
    "birth_day": ISODate("2008-11-18T00:00:00.000Z"),
    email: "phuhuynhnguyenthikieuoanh.@gmail.com",
    "registration_date": ISODate("2023-12-13T18:05:26.757Z"),
    gender: NumberInt("1"),
    "role_key": "STUDENTS",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T18:05:26.758Z"),
    "update_at": ISODate("2023-12-13T18:05:26.758Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579f266f20069ea4c4f7c12"),
    "user_name": "caonguyenngochan2008",
    password: "$2b$10$LNjFqLVDy9F0UNgYgwnIC.uv6kVmLbcio3O0HjwC0.hzdu0kcS39q",
    "full_name": "Cao Nguyễn Ngọc Hân",
    "birth_day": ISODate("2008-06-13T00:00:00.000Z"),
    email: "phuhuynhnguyenthikimdung.@gmail.com",
    "registration_date": ISODate("2023-12-13T18:05:26.836Z"),
    gender: NumberInt("2"),
    "role_key": "STUDENTS",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T18:05:26.836Z"),
    "update_at": ISODate("2023-12-13T18:05:26.836Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579f266f20069ea4c4f7c1b"),
    "user_name": "vodoanbaohan2008",
    password: "$2b$10$sAfPRUQDs7n8kKH7RaLEWeJOyOSpol39NjS/Bov.2iRevzLWk2uOy",
    "full_name": "Võ Đoàn Bảo Hân",
    "birth_day": ISODate("2008-09-18T00:00:00.000Z"),
    email: "phuhuynhtranducloc.@gmail.com",
    "registration_date": ISODate("2023-12-13T18:05:26.916Z"),
    gender: NumberInt("2"),
    "role_key": "STUDENTS",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T18:05:26.916Z"),
    "update_at": ISODate("2023-12-13T18:05:26.916Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579f266f20069ea4c4f7c24"),
    "user_name": "phamgiahuy2008",
    password: "$2b$10$b/1kg6t6.X10XJgXH2MArOEkOvOnu59yUaq1JVxUI2HXCB6zESkX.",
    "full_name": "Phạm Gia Huy",
    "birth_day": ISODate("2008-02-09T00:00:00.000Z"),
    email: "phuhuynhdinhthituyetmai.@gmail.com",
    "registration_date": ISODate("2023-12-13T18:05:26.996Z"),
    gender: NumberInt("1"),
    "role_key": "STUDENTS",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T18:05:26.996Z"),
    "update_at": ISODate("2023-12-13T18:05:26.996Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579f267f20069ea4c4f7c2d"),
    "user_name": "phamlegiakhiem2008",
    password: "$2b$10$cIOcb79kWtKu7tdVf.J4CeGfu48Lqmb7X49lFvR64UO38NwPT/cie",
    "full_name": "Phạm Lê Gia Khiêm",
    "birth_day": ISODate("2008-11-14T00:00:00.000Z"),
    email: "phuhuynhnguyendaihao.@gmail.com",
    "registration_date": ISODate("2023-12-13T18:05:27.075Z"),
    gender: NumberInt("1"),
    "role_key": "STUDENTS",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T18:05:27.075Z"),
    "update_at": ISODate("2023-12-13T18:05:27.075Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579f267f20069ea4c4f7c36"),
    "user_name": "thachgiakiet2008",
    password: "$2b$10$S17CeW.zcLDls1OjxL.woOr1PeRmiddVfzuVNXg0fH0YvRO.Aq25C",
    "full_name": "Thạch Gia Kiệt",
    "birth_day": ISODate("2008-11-29T00:00:00.000Z"),
    email: "phuhuynhngoconggiang.@gmail.com",
    "registration_date": ISODate("2023-12-13T18:05:27.158Z"),
    gender: NumberInt("1"),
    "role_key": "STUDENTS",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T18:05:27.158Z"),
    "update_at": ISODate("2023-12-13T18:05:27.158Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579f267f20069ea4c4f7c3f"),
    "user_name": "phamtanloc2008",
    password: "$2b$10$hPG3MQriHXUH1Tjosg.Dr.5OTZYe6a40diMAM0lDHrKn5/fRDdkPy",
    "full_name": "Phạm Tấn Lộc",
    "birth_day": ISODate("2008-06-16T00:00:00.000Z"),
    email: "phuhuynhngovuongquyen.@gmail.com",
    "registration_date": ISODate("2023-12-13T18:05:27.237Z"),
    gender: NumberInt("1"),
    "role_key": "STUDENTS",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T18:05:27.237Z"),
    "update_at": ISODate("2023-12-13T18:05:27.237Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579f267f20069ea4c4f7c48"),
    "user_name": "nguyentanloc2008",
    password: "$2b$10$zVUkRYtXLydv7AbSDbEo4ufBGJNQsiYiMayoy3igTFzOeBFwY5u6m",
    "full_name": "Nguyễn Tấn Lộc",
    "birth_day": ISODate("2008-02-07T00:00:00.000Z"),
    email: "phuhuynhtrinhthihuong.@gmail.com",
    "registration_date": ISODate("2023-12-13T18:05:27.314Z"),
    gender: NumberInt("1"),
    "role_key": "STUDENTS",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T18:05:27.315Z"),
    "update_at": ISODate("2023-12-13T18:05:27.315Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579f267f20069ea4c4f7c51"),
    "user_name": "ngothanhlong2008",
    password: "$2b$10$SGR1I9uhbz8UErF5Qsr.jeTIS8BBd0cs8rnEnL5GKTjh3KnbrXuJa",
    "full_name": "Ngô Thành Long",
    "birth_day": ISODate("2008-10-17T00:00:00.000Z"),
    email: "phuhuynhhuynhthibichhoa.@gmail.com",
    "registration_date": ISODate("2023-12-13T18:05:27.399Z"),
    gender: NumberInt("1"),
    "role_key": "STUDENTS",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T18:05:27.399Z"),
    "update_at": ISODate("2023-12-13T18:05:27.399Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579f267f20069ea4c4f7c5a"),
    "user_name": "voanhluan2008",
    password: "$2b$10$7PDsZ85cc2ZIdR/5IFmMluhrlQ.4tNiGTFpTODeqlYPxH6aEHFUVq",
    "full_name": "Võ Anh Luận",
    "birth_day": ISODate("2008-01-29T00:00:00.000Z"),
    email: "phuhuynhbantrong.@gmail.com",
    "registration_date": ISODate("2023-12-13T18:05:27.478Z"),
    gender: NumberInt("1"),
    "role_key": "STUDENTS",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T18:05:27.478Z"),
    "update_at": ISODate("2023-12-13T18:05:27.478Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579f267f20069ea4c4f7c63"),
    "user_name": "truongthitrami2008",
    password: "$2b$10$L.dD92XCYm9Z5trlq2TNxuNkzDlRbi/i2yN2q2zQ/P9z0gso9jsKC",
    "full_name": "Trương Thị Trà Mi",
    "birth_day": ISODate("2008-10-28T00:00:00.000Z"),
    email: "phuhuynhnguyenthithang.@gmail.com",
    "registration_date": ISODate("2023-12-13T18:05:27.559Z"),
    gender: NumberInt("2"),
    "role_key": "STUDENTS",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T18:05:27.56Z"),
    "update_at": ISODate("2023-12-13T18:05:27.56Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579f267f20069ea4c4f7c6c"),
    "user_name": "tranaimy2008",
    password: "$2b$10$MEizXDJOuIXEIvXyMo5nzucj9gUEMKLmijhBMrd2Bn9R7uh0pj.IG",
    "full_name": "Trần Ái Mỹ",
    "birth_day": ISODate("2008-05-20T00:00:00.000Z"),
    email: "phuhuynhtranhuuhung.@gmail.com",
    "registration_date": ISODate("2023-12-13T18:05:27.642Z"),
    gender: NumberInt("2"),
    "role_key": "STUDENTS",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T18:05:27.643Z"),
    "update_at": ISODate("2023-12-13T18:05:27.643Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579f267f20069ea4c4f7c75"),
    "user_name": "vohoainam2008",
    password: "$2b$10$KZe8idOe5q4yFqr8EjiH9OkeMGWiK9G68X0rrV6dFu5Zb.voWSIw6",
    "full_name": "Võ Hoài Nam",
    "birth_day": ISODate("2008-02-14T00:00:00.000Z"),
    email: "phuhuynhhothimychung.@gmail.com",
    "registration_date": ISODate("2023-12-13T18:05:27.727Z"),
    gender: NumberInt("1"),
    "role_key": "STUDENTS",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T18:05:27.727Z"),
    "update_at": ISODate("2023-12-13T18:05:27.727Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579f267f20069ea4c4f7c7e"),
    "user_name": "truongbaongan2008",
    password: "$2b$10$eRucTfIXGY8fuPYyi8kgLev6w96cljkEQMwgWa.F0Prr.aJJCKcne",
    "full_name": "Trương Bảo Ngân",
    "birth_day": ISODate("2008-07-02T00:00:00.000Z"),
    email: "phuhuynhvuquangson.@gmail.com",
    "registration_date": ISODate("2023-12-13T18:05:27.806Z"),
    gender: NumberInt("2"),
    "role_key": "STUDENTS",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T18:05:27.806Z"),
    "update_at": ISODate("2023-12-13T18:05:27.806Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579f267f20069ea4c4f7c87"),
    "user_name": "hothithanhngan2008",
    password: "$2b$10$9zVFYvdgRjOtgIFdGLreVuAZtxkHvOI4mJ5XrbjPeCK.5CBC3xsdi",
    "full_name": "Hồ Thị Thanh Ngân",
    "birth_day": ISODate("2008-09-14T00:00:00.000Z"),
    email: "phuhuynhtrannamchinh.@gmail.com",
    "registration_date": ISODate("2023-12-13T18:05:27.884Z"),
    gender: NumberInt("2"),
    "role_key": "STUDENTS",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T18:05:27.884Z"),
    "update_at": ISODate("2023-12-13T18:05:27.884Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579f267f20069ea4c4f7c90"),
    "user_name": "tranthimyngoc2008",
    password: "$2b$10$QcXHwXig9yUfCqFHBJ/WCeEGDslAUPb4vuYHRyLnr/RnnYxHqTbF6",
    "full_name": "Trần Thị Mỹ Ngọc",
    "birth_day": ISODate("2008-02-19T00:00:00.000Z"),
    email: "phuhuynhphamthihang.@gmail.com",
    "registration_date": ISODate("2023-12-13T18:05:27.968Z"),
    gender: NumberInt("2"),
    "role_key": "STUDENTS",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T18:05:27.968Z"),
    "update_at": ISODate("2023-12-13T18:05:27.968Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6579f268f20069ea4c4f7c99"),
    "user_name": "trannguyenhanhnguyen2008",
    password: "$2b$10$2rymw72xLsmlQm3ERSe0e.WnmwPgkAM/tAoRhqsdWvs8I/nYgomAS",
    "full_name": "Trần Nguyễn Hạnh Nguyên",
    "birth_day": ISODate("2008-08-13T00:00:00.000Z"),
    email: "phuhuynhvanminhduong.@gmail.com",
    "registration_date": ISODate("2023-12-13T18:05:28.046Z"),
    gender: NumberInt("2"),
    "role_key": "STUDENTS",
    "delete_at": null,
    "create_at": ISODate("2023-12-13T18:05:28.046Z"),
    "update_at": ISODate("2023-12-13T18:05:28.046Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("657b44e84a1ef8c0146ffd18"),
    "user_name": "gv0050",
    password: "$2b$10$M8WuCyZx5K5cdfAdZkb1q.Yht4tpRMGmlJsKAK67GqdEg0T6HEAdq",
    "full_name": "Nguyễn Tuấn Anh",
    "birth_day": ISODate("1980-05-28T00:00:00.000Z"),
    phone: "0123456789",
    email: "NguyễnTuấnAnh.@gmail.com",
    "registration_date": ISODate("2023-12-14T18:09:44.678Z"),
    gender: NumberInt("1"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-14T18:09:44.681Z"),
    "update_at": ISODate("2023-12-14T18:09:44.681Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("657b44e84a1ef8c0146ffd1e"),
    "user_name": "gv0051",
    password: "$2b$10$fz5peINv0emS26vDfmhqGu13.LRXN9NFV6Q4yFY4u/5IxsaNlEXcW",
    "full_name": "Đỗ Đức Bảo",
    "birth_day": ISODate("1980-05-26T00:00:00.000Z"),
    phone: "0123456790",
    email: "ĐỗĐứcBảo.@gmail.com",
    "registration_date": ISODate("2023-12-14T18:09:44.867Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-14T18:09:44.868Z"),
    "update_at": ISODate("2023-12-14T18:09:44.868Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("657b44e84a1ef8c0146ffd24"),
    "user_name": "gv0052",
    password: "$2b$10$ohEm/uff5cnf9lHdaGZzuOtMw9aJkR.pA1nuuiW//OsqTaLewPDMC",
    "full_name": "Nguyễn Thị Ngọc Bích",
    "birth_day": ISODate("1980-10-15T00:00:00.000Z"),
    phone: "0123456791",
    email: "NguyễnThịNgọcBích.@gmail.com",
    "registration_date": ISODate("2023-12-14T18:09:44.95Z"),
    gender: NumberInt("1"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-14T18:09:44.95Z"),
    "update_at": ISODate("2023-12-14T18:09:44.95Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("657b44e94a1ef8c0146ffd2a"),
    "user_name": "gv0053",
    password: "$2b$10$obNnQ8L/Z4iYZnCO5l8ohO1U46Q18nznIOy3g/ATP9pobRaamX1h6",
    "full_name": "Bành Bảo Châu",
    "birth_day": ISODate("1980-03-28T00:00:00.000Z"),
    phone: "0123456792",
    email: "BànhBảoChâu.@gmail.com",
    "registration_date": ISODate("2023-12-14T18:09:45.03Z"),
    gender: NumberInt("1"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-14T18:09:45.031Z"),
    "update_at": ISODate("2023-12-14T18:09:45.031Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("657b44e94a1ef8c0146ffd30"),
    "user_name": "gv0054",
    password: "$2b$10$RettvICqyWY8gDrp8i0g7u3DdMHgZ0SE4vEsHAwjvmdGMX80oORjK",
    "full_name": "Đặng Tuyết Chinh",
    "birth_day": ISODate("1980-04-10T00:00:00.000Z"),
    phone: "0123456793",
    email: "ĐặngTuyếtChinh.@gmail.com",
    "registration_date": ISODate("2023-12-14T18:09:45.112Z"),
    gender: NumberInt("1"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-14T18:09:45.112Z"),
    "update_at": ISODate("2023-12-14T18:09:45.112Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("657b44e94a1ef8c0146ffd36"),
    "user_name": "gv0055",
    password: "$2b$10$TdpM/6DEh6tFGEegcWJTZ.uEOPFDyKWZTVGCd4NiW8oY5evGC4TCO",
    "full_name": "Đỗ Hoàng Quốc Chính",
    "birth_day": ISODate("1980-11-18T00:00:00.000Z"),
    phone: "0123456794",
    email: "ĐỗHoàngQuốcChính.@gmail.com",
    "registration_date": ISODate("2023-12-14T18:09:45.193Z"),
    gender: NumberInt("1"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-14T18:09:45.194Z"),
    "update_at": ISODate("2023-12-14T18:09:45.194Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("657b44e94a1ef8c0146ffd3c"),
    "user_name": "gv0056",
    password: "$2b$10$aX/Ju3xGoiwEtyZQee6MruFMQsQXjGkv9iw0cSHUBNrcJhZEoHRyK",
    "full_name": "Lê Mạnh Cường",
    "birth_day": ISODate("1980-06-13T00:00:00.000Z"),
    phone: "0123456795",
    email: "LêMạnhCường.@gmail.com",
    "registration_date": ISODate("2023-12-14T18:09:45.274Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-14T18:09:45.274Z"),
    "update_at": ISODate("2023-12-14T18:09:45.274Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("657b44e94a1ef8c0146ffd42"),
    "user_name": "gv0057",
    password: "$2b$10$88xHQ.JtPX/0p9H0bmdMWu7oPVnB6CHjTTwOFhyB.kuioLLyESEBi",
    "full_name": "Trần Hải Đăng",
    "birth_day": ISODate("1980-09-18T00:00:00.000Z"),
    phone: "0123456796",
    email: "TrầnHảiĐăng.@gmail.com",
    "registration_date": ISODate("2023-12-14T18:09:45.355Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-14T18:09:45.355Z"),
    "update_at": ISODate("2023-12-14T18:09:45.355Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("657b44e94a1ef8c0146ffd48"),
    "user_name": "gv0058",
    password: "$2b$10$OkKr6BblO.iXAG7bI.JWz.TSNFRJXhOO.yUgOt7LFLP42nQO4X8BW",
    "full_name": "Lưu Thành Đạt",
    "birth_day": ISODate("1980-02-09T00:00:00.000Z"),
    phone: "0123456797",
    email: "LưuThànhĐạt.@gmail.com",
    "registration_date": ISODate("2023-12-14T18:09:45.436Z"),
    gender: NumberInt("1"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-14T18:09:45.437Z"),
    "update_at": ISODate("2023-12-14T18:09:45.437Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("657b44e94a1ef8c0146ffd50"),
    "user_name": "gv0059",
    password: "$2b$10$n/Z/6LsYmdNO1OBUOd5B7uF931GaKGwXu8N55iJ5iIQs9xiStD6oG",
    "full_name": "Nguyễn Thành Đạt",
    "birth_day": ISODate("1980-11-14T00:00:00.000Z"),
    phone: "0123456798",
    email: "NguyễnThànhĐạt.@gmail.com",
    "registration_date": ISODate("2023-12-14T18:09:45.517Z"),
    gender: NumberInt("1"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-14T18:09:45.517Z"),
    "update_at": ISODate("2023-12-14T18:09:45.517Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("657b44e94a1ef8c0146ffd58"),
    "user_name": "gv0060",
    password: "$2b$10$YqN7kIOIFX4mHeqII8QuOO7OZpW2BqnJwsXliijWd0b0fHJV0hj8O",
    "full_name": "Trần Tiến Đạt",
    "birth_day": ISODate("1980-11-29T00:00:00.000Z"),
    phone: "0123456799",
    email: "TrầnTiếnĐạt.@gmail.com",
    "registration_date": ISODate("2023-12-14T18:09:45.596Z"),
    gender: NumberInt("1"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-14T18:09:45.596Z"),
    "update_at": ISODate("2023-12-14T18:09:45.596Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("657b44e94a1ef8c0146ffd60"),
    "user_name": "gv0061",
    password: "$2b$10$k.ezqN4yjAyL9hxck0nqiuQSHqLOyJr/2uhbp/11BrgTtSlXJAwCS",
    "full_name": "Hoàng Trần Minh Đức",
    "birth_day": ISODate("1980-06-16T00:00:00.000Z"),
    phone: "0123456800",
    email: "HoàngTrầnMinhĐức.@gmail.com",
    "registration_date": ISODate("2023-12-14T18:09:45.674Z"),
    gender: NumberInt("1"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-14T18:09:45.674Z"),
    "update_at": ISODate("2023-12-14T18:09:45.674Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("657b44e94a1ef8c0146ffd66"),
    "user_name": "gv0062",
    password: "$2b$10$4YG8HWUyv7d2pP4AKBb9OeOgCdanrrje326fiZMXZI.G04ov8lBXG",
    "full_name": "Phạm Xuân Đức",
    "birth_day": ISODate("1980-02-07T00:00:00.000Z"),
    phone: "0123456801",
    email: "PhạmXuânĐức.@gmail.com",
    "registration_date": ISODate("2023-12-14T18:09:45.755Z"),
    gender: NumberInt("1"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-14T18:09:45.755Z"),
    "update_at": ISODate("2023-12-14T18:09:45.755Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("657b44e94a1ef8c0146ffd6c"),
    "user_name": "gv0063",
    password: "$2b$10$lYeIcEzS8ciETvLqEGkKc.MCWWkFpsnGxrCgwm0IUK6f2AnDD39cq",
    "full_name": "Trần Văn Đức",
    "birth_day": ISODate("1980-10-17T00:00:00.000Z"),
    phone: "0123456802",
    email: "TrầnVănĐức.@gmail.com",
    "registration_date": ISODate("2023-12-14T18:09:45.835Z"),
    gender: NumberInt("1"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-14T18:09:45.835Z"),
    "update_at": ISODate("2023-12-14T18:09:45.835Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("657b44e94a1ef8c0146ffd72"),
    "user_name": "gv0064",
    password: "$2b$10$U7ENMf5Nj3D7oqQwirSN1uIuUTnK22VEHuy55Mx68/Rf/ssEwKI52",
    "full_name": "Đào Thị Thùy Dương",
    "birth_day": ISODate("1980-01-29T00:00:00.000Z"),
    phone: "0123456803",
    email: "ĐàoThịThùyDương.@gmail.com",
    "registration_date": ISODate("2023-12-14T18:09:45.917Z"),
    gender: NumberInt("1"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-14T18:09:45.917Z"),
    "update_at": ISODate("2023-12-14T18:09:45.917Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("657b44e94a1ef8c0146ffd78"),
    "user_name": "gv0065",
    password: "$2b$10$eGgoezdbncZxEkvM3DwASepQAQgfIaLUO.VgQMCmestTkHuvT46FG",
    "full_name": "Bùi Đức Giang",
    "birth_day": ISODate("1980-10-28T00:00:00.000Z"),
    phone: "0123456804",
    email: "BùiĐứcGiang.@gmail.com",
    "registration_date": ISODate("2023-12-14T18:09:45.997Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-14T18:09:45.997Z"),
    "update_at": ISODate("2023-12-14T18:09:45.997Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("657b44ea4a1ef8c0146ffd7e"),
    "user_name": "gv0066",
    password: "$2b$10$4U6sTMXEG.IOgJ8oxZ04U.VWHhZQNgeDYwBr8JCDUbYTOv2kLyptq",
    "full_name": "Nguyễn Trường Giang",
    "birth_day": ISODate("1980-05-20T00:00:00.000Z"),
    phone: "0123456805",
    email: "NguyễnTrườngGiang.@gmail.com",
    "registration_date": ISODate("2023-12-14T18:09:46.076Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-14T18:09:46.076Z"),
    "update_at": ISODate("2023-12-14T18:09:46.076Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("657b44ea4a1ef8c0146ffd84"),
    "user_name": "gv0067",
    password: "$2b$10$MSswk53LgrPBXDQcFBlEbeV79vbc5A.LjD5/UZVdOXBwZN.Zngqku",
    "full_name": "Phạm Văn Hải",
    "birth_day": ISODate("1980-02-14T00:00:00.000Z"),
    phone: "0123456806",
    email: "PhạmVănHải.@gmail.com",
    "registration_date": ISODate("2023-12-14T18:09:46.157Z"),
    gender: NumberInt("1"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-14T18:09:46.157Z"),
    "update_at": ISODate("2023-12-14T18:09:46.157Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("657b44ea4a1ef8c0146ffd8c"),
    "user_name": "gv0068",
    password: "$2b$10$pRM/euF8esZm9eR5yRIEpeSmAd83F0fegtLK7xp80wUmThzEsmDa2",
    "full_name": "Trần Thị Hải",
    "birth_day": ISODate("1980-07-02T00:00:00.000Z"),
    phone: "0123456807",
    email: "TrầnThịHải.@gmail.com",
    "registration_date": ISODate("2023-12-14T18:09:46.234Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-14T18:09:46.235Z"),
    "update_at": ISODate("2023-12-14T18:09:46.235Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("657b44ea4a1ef8c0146ffd92"),
    "user_name": "gv0069",
    password: "$2b$10$oPSvJuTkSSicnF/w8.3AAupUtv2SC2OhbS4L32hvyGN3fm63iikk.",
    "full_name": "Tăng Thị Hảo",
    "birth_day": ISODate("1980-09-14T00:00:00.000Z"),
    phone: "0123456808",
    email: "TăngThịHảo.@gmail.com",
    "registration_date": ISODate("2023-12-14T18:09:46.315Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-14T18:09:46.315Z"),
    "update_at": ISODate("2023-12-14T18:09:46.315Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("657b44ea4a1ef8c0146ffd9a"),
    "user_name": "gv0070",
    password: "$2b$10$WEv59gAp6AN/PI8DhkvNVOkYVqhXrbPuMqgLk6cRf0WdFFKPpICha",
    "full_name": "Nguyễn Thị Hiền",
    "birth_day": ISODate("1980-02-19T00:00:00.000Z"),
    phone: "0123456809",
    email: "NguyễnThịHiền.@gmail.com",
    "registration_date": ISODate("2023-12-14T18:09:46.392Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-14T18:09:46.392Z"),
    "update_at": ISODate("2023-12-14T18:09:46.392Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("657b44ea4a1ef8c0146ffda2"),
    "user_name": "gv0071",
    password: "$2b$10$Lf1hsdrbrTb2V9PuCzQpHeolix2KQq9eiUd1Yu44t8jYpxlR0U2Re",
    "full_name": "Nguyễn Văn Hiệp",
    "birth_day": ISODate("1980-08-13T00:00:00.000Z"),
    phone: "0123456810",
    email: "NguyễnVănHiệp.@gmail.com",
    "registration_date": ISODate("2023-12-14T18:09:46.47Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-14T18:09:46.471Z"),
    "update_at": ISODate("2023-12-14T18:09:46.471Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("657b44ea4a1ef8c0146ffdaa"),
    "user_name": "gv0072",
    password: "$2b$10$lsSgKVKE5y5bj0GXprlAweSrZTBx21UkL2leMAzcy04z/FDvCMns6",
    "full_name": "Phạm Văn Hiệp",
    "birth_day": ISODate("1981-08-13T00:00:00.000Z"),
    phone: "0123456811",
    email: "PhạmVănHiệp.@gmail.com",
    "registration_date": ISODate("2023-12-14T18:09:46.55Z"),
    gender: NumberInt("1"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-14T18:09:46.55Z"),
    "update_at": ISODate("2023-12-14T18:09:46.55Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("657b44ea4a1ef8c0146ffdb2"),
    "user_name": "gv0073",
    password: "$2b$10$9ujJ0am/n2FFJTZ4Nj3oQOD29tUiBtzWabCXDAxw13AyDl9itFmNa",
    "full_name": "Bùi Lê Hiếu",
    "birth_day": ISODate("1982-08-13T00:00:00.000Z"),
    phone: "0123456812",
    email: "BùiLêHiếu.@gmail.com",
    "registration_date": ISODate("2023-12-14T18:09:46.628Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-14T18:09:46.628Z"),
    "update_at": ISODate("2023-12-14T18:09:46.628Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("657b44ea4a1ef8c0146ffdba"),
    "user_name": "gv0074",
    password: "$2b$10$H2qwvDqBs/Z7cbOvorisFOqvvaCW.umCA5XMIl4v3vCMbfGTy4LMG",
    "full_name": "Nguyễn Quang Hiếu",
    "birth_day": ISODate("1983-08-13T00:00:00.000Z"),
    phone: "0123456813",
    email: "NguyễnQuangHiếu.@gmail.com",
    "registration_date": ISODate("2023-12-14T18:09:46.706Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-14T18:09:46.707Z"),
    "update_at": ISODate("2023-12-14T18:09:46.707Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("657b44ea4a1ef8c0146ffdc0"),
    "user_name": "gv0075",
    password: "$2b$10$CpJIZ5sVpY39qMMLHIK3fusUe0rAbGJMzudIS4Bic01vPa5xRcS56",
    "full_name": "Phạm Minh Hiếu",
    "birth_day": ISODate("1984-08-13T00:00:00.000Z"),
    phone: "0123456814",
    email: "PhạmMinhHiếu.@gmail.com",
    "registration_date": ISODate("2023-12-14T18:09:46.787Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-14T18:09:46.787Z"),
    "update_at": ISODate("2023-12-14T18:09:46.787Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("657b44ea4a1ef8c0146ffdc8"),
    "user_name": "gv0076",
    password: "$2b$10$fosq4hpW5rQc4Gcr80LeFeXW7QnaqbD2Pv9Abg/SzOQPK0VtAEIya",
    "full_name": "Tạ Văn Hiếu",
    "birth_day": ISODate("1985-08-13T00:00:00.000Z"),
    phone: "0123456815",
    email: "TạVănHiếu.@gmail.com",
    "registration_date": ISODate("2023-12-14T18:09:46.865Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-14T18:09:46.865Z"),
    "update_at": ISODate("2023-12-14T18:09:46.865Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("657b44ea4a1ef8c0146ffdce"),
    "user_name": "gv0077",
    password: "$2b$10$9vLgIEfvqKTC1rwjF5VP6.s.GMJ3uBP5V8hWgREhyTwVT48PBIM9C",
    "full_name": "Vũ Đức Hiếu",
    "birth_day": ISODate("1986-08-13T00:00:00.000Z"),
    phone: "0123456816",
    email: "VũĐứcHiếu.@gmail.com",
    "registration_date": ISODate("2023-12-14T18:09:46.945Z"),
    gender: NumberInt("1"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-14T18:09:46.945Z"),
    "update_at": ISODate("2023-12-14T18:09:46.945Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("657b44eb4a1ef8c0146ffdd6"),
    "user_name": "gv0078",
    password: "$2b$10$U9Xu7Z0nLNj5Gb.2H9bzuOlEeUmAYG.CoAS76MjMPMr0lkz6x.A0C",
    "full_name": "Vũ Minh Hiếu",
    "birth_day": ISODate("1987-08-13T00:00:00.000Z"),
    phone: "0123456817",
    email: "VũMinhHiếu.@gmail.com",
    "registration_date": ISODate("2023-12-14T18:09:47.023Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-14T18:09:47.024Z"),
    "update_at": ISODate("2023-12-14T18:09:47.024Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("657b44eb4a1ef8c0146ffdde"),
    "user_name": "gv0079",
    password: "$2b$10$hqrumY1V4aYo8KCW9WkDY.Jv00/.G9LoVQ6/bh8gkjJ4k6BXx2yAi",
    "full_name": "Đỗ Văn Hiểu",
    "birth_day": ISODate("1988-08-13T00:00:00.000Z"),
    phone: "0123456818",
    email: "ĐỗVănHiểu.@gmail.com",
    "registration_date": ISODate("2023-12-14T18:09:47.101Z"),
    gender: NumberInt("1"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-14T18:09:47.102Z"),
    "update_at": ISODate("2023-12-14T18:09:47.102Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("657b44eb4a1ef8c0146ffde6"),
    "user_name": "gv0080",
    password: "$2b$10$.fHtWuJJXjLXnsL9KJvlauLBXpfh5dgZjKjoJZ62qrkhLDyqvswsq",
    "full_name": "Trần Lâm Hoài",
    "birth_day": ISODate("1989-08-13T00:00:00.000Z"),
    phone: "0123456819",
    email: "TrầnLâmHoài.@gmail.com",
    "registration_date": ISODate("2023-12-14T18:09:47.179Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-14T18:09:47.179Z"),
    "update_at": ISODate("2023-12-14T18:09:47.179Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("657b44eb4a1ef8c0146ffdec"),
    "user_name": "gv0081",
    password: "$2b$10$DZkushVZDwQarqj2uJ.xMO/OHn2pMh4bRc2vF.BLoAHsm5Bq23pYK",
    "full_name": "Chu Minh Hoàng",
    "birth_day": ISODate("1990-08-13T00:00:00.000Z"),
    phone: "0123456820",
    email: "ChuMinhHoàng.@gmail.com",
    "registration_date": ISODate("2023-12-14T18:09:47.259Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-14T18:09:47.26Z"),
    "update_at": ISODate("2023-12-14T18:09:47.26Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("657b44eb4a1ef8c0146ffdf2"),
    "user_name": "gv0082",
    password: "$2b$10$/Or/Hg71Pqqy0IP0GP2HseXiBbE5G/1..cRXUWAsJPhKu0.xgUZ/i",
    "full_name": "Dương Văn Hùng",
    "birth_day": ISODate("1980-04-10T00:00:00.000Z"),
    phone: "0123456821",
    email: "DươngVănHùng.@gmail.com",
    "registration_date": ISODate("2023-12-14T18:09:47.339Z"),
    gender: NumberInt("2"),
    "role_key": "TEACHER2",
    "delete_at": null,
    "create_at": ISODate("2023-12-14T18:09:47.34Z"),
    "update_at": ISODate("2023-12-14T18:09:47.34Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("t_account").insert([ {
    _id: ObjectId("6581d0a9c6d84d3a38f650c0"),
    "user_name": "chunhiem1",
    password: "$2b$10$rF/qOc8eu4QC0Wv/KNRw7.dhm5XX0xSTBgzv9c2MnI.YlNQq2MOyW",
    "full_name": "Nguyễn Hải Sơn",
    "birth_day": ISODate("2000-02-22T00:00:00.000Z"),
    email: "22102001son+1661@gmail.com",
    "registration_date": ISODate("2023-12-19T17:19:37.609Z"),
    gender: NumberInt("1"),
    "role_key": "TEACHER",
    "delete_at": null,
    "create_at": ISODate("2023-12-19T17:19:37.61Z"),
    "update_at": ISODate("2023-12-19T17:19:37.61Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for teachers
// ----------------------------
db.getCollection("teachers").drop();
db.createCollection("teachers");

// ----------------------------
// Documents of teachers
// ----------------------------
db.getCollection("teachers").insert([ {
    _id: ObjectId("655f93b7eecd22748dd28766"),
    "account_id": ObjectId("655f93b7eecd22748dd28762"),
    "teacher_alias_string": "2023",
    "teacher_alias_number": NumberInt("1"),
    address: "GD",
    "class_id": ObjectId("655e1600a486a319c0851455"),
    "class_list": [
        {
            "class_id": ObjectId("655e1600a486a319c0851455"),
            "start_date": null,
            "end_date": null
        }
    ],
    "class_history": [ ],
    "create_at": ISODate("2023-11-23T18:02:31.775Z"),
    "delete_at": null,
    "update_at": ISODate("2023-11-23T18:02:31.778Z"),
    __v: NumberInt("1")
} ]);
db.getCollection("teachers").insert([ {
    _id: ObjectId("6561eb555c710ca9c348f990"),
    "account_id": ObjectId("6561eb555c710ca9c348f98c"),
    "teacher_alias_string": "2023",
    "teacher_alias_number": NumberInt("1"),
    "class_id": ObjectId("655f6797919184301d460666"),
    "class_list": [
        {
            "class_id": ObjectId("655f6797919184301d460666"),
            "start_date": ISODate("2023-11-23T14:54:15.475Z"),
            "end_date": ISODate("2024-11-23T14:54:15.475Z")
        }
    ],
    "class_history": [ ],
    "create_at": ISODate("2023-11-25T12:40:53.12Z"),
    "delete_at": null,
    "update_at": ISODate("2023-11-25T12:40:53.121Z"),
    __v: NumberInt("1")
} ]);
db.getCollection("teachers").insert([ {
    _id: ObjectId("6581d0a9c6d84d3a38f650c4"),
    "account_id": ObjectId("6581d0a9c6d84d3a38f650c0"),
    "teacher_alias_string": "2023",
    "teacher_alias_number": NumberInt("1"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "class_list": [
        {
            "class_id": ObjectId("654ba6aef02b0000460048cc"),
            "start_date": null,
            "end_date": null
        }
    ],
    "class_history": [ ],
    "create_at": ISODate("2023-12-19T17:19:37.626Z"),
    "delete_at": null,
    "update_at": ISODate("2023-12-19T17:19:37.627Z"),
    __v: NumberInt("1")
} ]);

// ----------------------------
// Collection structure for test
// ----------------------------
db.getCollection("test").drop();
db.createCollection("test");

// ----------------------------
// Documents of test
// ----------------------------
db.getCollection("test").insert([ {
    _id: ObjectId("657717a3c92f00006b004bb2"),
    name: "Kiểm tra miệng",
    alias: "M",
    priority: 1,
    "list_exam": [
        {
            order: 1,
            "exam_id": ObjectId("6577183cc92f00006b004bb5")
        },
        {
            order: 2,
            "exam_id": ObjectId("6577186fc92f00006b004bb8")
        },
        {
            order: 3,
            "exam_id": ObjectId("65771881c92f00006b004bbb")
        },
        {
            order: 4,
            "exam_id": ObjectId("65771893c92f00006b004bbd")
        }
    ]
} ]);
db.getCollection("test").insert([ {
    _id: ObjectId("65771dd9c92f00006b004bc3"),
    name: "Kiểm tra 15 phút",
    alias: "15'",
    priority: 1,
    "list_exam": [
        {
            order: 1,
            "exam_id": ObjectId("65771dd9c92f00006b004bc4")
        },
        {
            order: 2,
            "exam_id": ObjectId("65771dd9c92f00006b004bc5")
        },
        {
            order: 3,
            "exam_id": ObjectId("65771dd9c92f00006b004bc6")
        },
        {
            order: 4,
            "exam_id": ObjectId("65771dd9c92f00006b004bc7")
        }
    ]
} ]);
db.getCollection("test").insert([ {
    _id: ObjectId("65771e49c92f00006b004bd2"),
    name: "Kiểm tra Giữa kì",
    alias: "GK",
    priority: 2,
    "list_exam": [
        {
            order: 1,
            "exam_id": ObjectId("65771e49c92f00006b004bd3")
        },
        {
            order: 2,
            "exam_id": ObjectId("65771e49c92f00006b004bd4")
        },
        {
            order: 3,
            "exam_id": ObjectId("65771e49c92f00006b004bd5")
        },
        {
            order: 4,
            "exam_id": ObjectId("65771e49c92f00006b004bd6")
        }
    ]
} ]);
db.getCollection("test").insert([ {
    _id: ObjectId("6577205cc92f00006b004bd9"),
    name: "Kiểm tra Học kì",
    alias: "HK",
    priority: 3,
    "list_exam": [
        {
            order: 1,
            "exam_id": ObjectId("6577205cc92f00006b004bda")
        }
    ]
} ]);

// ----------------------------
// Collection structure for timetables
// ----------------------------
db.getCollection("timetables").drop();
db.createCollection("timetables");

// ----------------------------
// Documents of timetables
// ----------------------------
db.getCollection("timetables").insert([ {
    _id: ObjectId("6570af57af8ab328c1b73818"),
    "class_id": ObjectId("6556471cafd5144ec8fac681"),
    "start_date": ISODate("2023-12-06T00:00:00.000Z"),
    "list_lesson": [
        {
            "lesson_id": ObjectId("656609b4114a000028007402"),
            order: NumberInt("0"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "subject_id": ObjectId("656ded55a1060000750074d2"),
                    "teacher_id": ObjectId("6570bce79f0be15ef8c0a119"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "subject_id": ObjectId("656ded55a1060000750074d4"),
                    "teacher_id": ObjectId("656f3845a691514470f6cbfc"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "subject_id": ObjectId("656ded55a1060000750074d2"),
                    "teacher_id": ObjectId("6570bce79f0be15ef8c0a119"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "subject_id": ObjectId("656ded55a1060000750074d2"),
                    "teacher_id": ObjectId("6570bce79f0be15ef8c0a119"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "subject_id": ObjectId("6571e6bd3d320000f6007142"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "subject_id": ObjectId("656ded55a1060000750074d2"),
                    "teacher_id": ObjectId("6570bce79f0be15ef8c0a119"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007403"),
            order: NumberInt("1"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "subject_id": ObjectId("656ded55a1060000750074d2"),
                    "teacher_id": ObjectId("6570bce79f0be15ef8c0a119"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "subject_id": ObjectId("656ded55a1060000750074d4"),
                    "teacher_id": ObjectId("656f3845a691514470f6cbfc"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "subject_id": ObjectId("656ded55a1060000750074d2"),
                    "teacher_id": ObjectId("6570bce79f0be15ef8c0a119"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "subject_id": ObjectId("656ded55a1060000750074d2"),
                    "teacher_id": ObjectId("6570bce79f0be15ef8c0a119"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007404"),
            order: NumberInt("2"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "subject_id": ObjectId("656ded55a1060000750074d4"),
                    "teacher_id": ObjectId("656f3845a691514470f6cbfc"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "subject_id": ObjectId("656ded55a1060000750074d4"),
                    "teacher_id": ObjectId("656f3845a691514470f6cbfc"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007405"),
            order: NumberInt("3"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "subject_id": ObjectId("656ded55a1060000750074d2"),
                    "teacher_id": ObjectId("6570bce79f0be15ef8c0a119"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "subject_id": ObjectId("656ded55a1060000750074d2"),
                    "teacher_id": ObjectId("6570bce79f0be15ef8c0a119"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007406"),
            order: NumberInt("4"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "subject_id": ObjectId("656ded55a1060000750074d3"),
                    "teacher_id": ObjectId("6571db597d5437cf3cd6add7"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "subject_id": ObjectId("656ded55a1060000750074d3"),
                    "teacher_id": ObjectId("6571db597d5437cf3cd6add7"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "subject_id": ObjectId("656ded55a1060000750074d3"),
                    "teacher_id": ObjectId("6571db597d5437cf3cd6add7"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007407"),
            order: NumberInt("5"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "subject_id": ObjectId("656ded55a1060000750074d3"),
                    "teacher_id": ObjectId("6571db597d5437cf3cd6add7"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "subject_id": ObjectId("656ded55a1060000750074d3"),
                    "teacher_id": ObjectId("6571db597d5437cf3cd6add7"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "subject_id": ObjectId("656ded55a1060000750074d3"),
                    "teacher_id": ObjectId("6571db597d5437cf3cd6add7"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007408"),
            order: NumberInt("6"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "subject_id": ObjectId("656ded55a1060000750074d3"),
                    "teacher_id": ObjectId("6571db597d5437cf3cd6add7"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "subject_id": ObjectId("656ded55a1060000750074d3"),
                    "teacher_id": ObjectId("6571db597d5437cf3cd6add7"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "subject_id": ObjectId("656ded55a1060000750074d3"),
                    "teacher_id": ObjectId("6571db597d5437cf3cd6add7"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007409"),
            order: NumberInt("7"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        }
    ],
    "delete_at": null,
    "create_at": ISODate("2023-12-06T17:28:55.998Z"),
    "update_at": ISODate("2023-12-06T17:28:55.998Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("timetables").insert([ {
    _id: ObjectId("6571e7763211a3f120943837"),
    "class_id": ObjectId("654ba6aef02b0000460048c5"),
    "start_date": ISODate("2023-09-12T00:00:00.000Z"),
    "list_lesson": [
        {
            "lesson_id": ObjectId("656609b4114a000028007402"),
            order: NumberInt("0"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "subject_id": ObjectId("656ded55a1060000750074d2"),
                    "teacher_id": ObjectId("6570bce79f0be15ef8c0a119"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "subject_id": ObjectId("656ded55a1060000750074d2"),
                    "teacher_id": ObjectId("6570bce79f0be15ef8c0a119"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007403"),
            order: NumberInt("1"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "subject_id": ObjectId("656ded55a1060000750074d2"),
                    "teacher_id": ObjectId("6570bce79f0be15ef8c0a119"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "subject_id": ObjectId("656ded55a1060000750074d2"),
                    "teacher_id": ObjectId("6570bce79f0be15ef8c0a119"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007404"),
            order: NumberInt("2"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "subject_id": ObjectId("656ded55a1060000750074d2"),
                    "teacher_id": ObjectId("6570bce79f0be15ef8c0a119"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "subject_id": ObjectId("656ded55a1060000750074d2"),
                    "teacher_id": ObjectId("6570bce79f0be15ef8c0a119"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007405"),
            order: NumberInt("3"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "subject_id": ObjectId("656ded55a1060000750074d3"),
                    "teacher_id": ObjectId("6571db597d5437cf3cd6add7"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007406"),
            order: NumberInt("4"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "subject_id": ObjectId("656ded55a1060000750074d3"),
                    "teacher_id": ObjectId("6571db597d5437cf3cd6add7"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007407"),
            order: NumberInt("5"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "subject_id": ObjectId("656ded55a1060000750074d3"),
                    "teacher_id": ObjectId("6571db597d5437cf3cd6add7"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007408"),
            order: NumberInt("6"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007409"),
            order: NumberInt("7"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        }
    ],
    "delete_at": null,
    "create_at": ISODate("2023-12-07T15:40:38.482Z"),
    "update_at": ISODate("2023-12-07T15:40:38.482Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("timetables").insert([ {
    _id: ObjectId("657c5202692336145f29ff78"),
    "class_id": ObjectId("654ba6aef02b000046004904"),
    "start_date": ISODate("2023-10-22T00:00:00.000Z"),
    "list_lesson": [
        {
            "lesson_id": ObjectId("656609b4114a000028007402"),
            order: NumberInt("0"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "subject_id": ObjectId("656ded55a1060000750074d3"),
                    "teacher_id": ObjectId("6579edb370b6146071df7994"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "subject_id": ObjectId("656ded55a1060000750074d3"),
                    "teacher_id": ObjectId("6579edb370b6146071df7994"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "subject_id": ObjectId("656ded55a1060000750074d3"),
                    "teacher_id": ObjectId("6579edb370b6146071df7994"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "subject_id": ObjectId("656ded55a1060000750074d2"),
                    "teacher_id": ObjectId("6579edaa70b6146071df798c"),
                    "room_id": ObjectId("6581b9cfde38612e37cc49a8"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "subject_id": ObjectId("656ded55a1060000750074d2"),
                    "teacher_id": ObjectId("6579edaa70b6146071df798c"),
                    "room_id": ObjectId("6581b9cfde38612e37cc49a8"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007403"),
            order: NumberInt("1"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "subject_id": ObjectId("656ded55a1060000750074d2"),
                    "teacher_id": ObjectId("6579edaa70b6146071df798c"),
                    "room_id": ObjectId("6581b9cfde38612e37cc49a8"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "subject_id": ObjectId("656ded55a1060000750074d2"),
                    "teacher_id": ObjectId("6579edaa70b6146071df798c"),
                    "room_id": ObjectId("6581b9cfde38612e37cc49a8"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007404"),
            order: NumberInt("2"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "subject_id": ObjectId("656ded55a1060000750074d2"),
                    "teacher_id": ObjectId("6579edaa70b6146071df798c"),
                    "room_id": ObjectId("6581b9cfde38612e37cc49a8"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "subject_id": ObjectId("656ded55a1060000750074d2"),
                    "teacher_id": ObjectId("6579edaa70b6146071df798c"),
                    "room_id": ObjectId("6581b9cfde38612e37cc49a8"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007405"),
            order: NumberInt("3"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "subject_id": ObjectId("656ded55a1060000750074d3"),
                    "teacher_id": ObjectId("6579edb370b6146071df7994"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "subject_id": ObjectId("656ded55a1060000750074d3"),
                    "teacher_id": ObjectId("6579edb370b6146071df7994"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "subject_id": ObjectId("656ded55a1060000750074d3"),
                    "teacher_id": ObjectId("6579edb370b6146071df7994"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007406"),
            order: NumberInt("4"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "subject_id": ObjectId("656ded55a1060000750074d3"),
                    "teacher_id": ObjectId("6579edb370b6146071df7994"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "subject_id": ObjectId("656ded55a1060000750074d3"),
                    "teacher_id": ObjectId("6579edb370b6146071df7994"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "subject_id": ObjectId("656ded55a1060000750074d3"),
                    "teacher_id": ObjectId("6579edb370b6146071df7994"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007407"),
            order: NumberInt("5"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007408"),
            order: NumberInt("6"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007409"),
            order: NumberInt("7"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        }
    ],
    "delete_at": null,
    "create_at": ISODate("2023-12-15T13:17:54.375Z"),
    "update_at": ISODate("2023-12-15T13:17:54.375Z"),
    __v: NumberInt("0"),
    "end_date": ISODate("2023-12-31T00:00:00.000Z")
} ]);
db.getCollection("timetables").insert([ {
    _id: ObjectId("657f0761480fc04d049b8523"),
    "class_id": ObjectId("654ba6aef02b00004600490f"),
    "start_date": ISODate("2023-12-12T00:00:00.000Z"),
    "list_lesson": [
        {
            "lesson_id": ObjectId("656609b4114a000028007402"),
            order: NumberInt("0"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "subject_id": ObjectId("656ded55a1060000750074d3"),
                    "teacher_id": ObjectId("657f0761480fc04d049b8525"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "subject_id": ObjectId("656ded55a1060000750074d3"),
                    "teacher_id": ObjectId("657f0874480fc04d049b8650"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007403"),
            order: NumberInt("1"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "subject_id": ObjectId("656ded55a1060000750074d3"),
                    "teacher_id": ObjectId("657f0761480fc04d049b8526"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007404"),
            order: NumberInt("2"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007405"),
            order: NumberInt("3"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007406"),
            order: NumberInt("4"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007407"),
            order: NumberInt("5"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007408"),
            order: NumberInt("6"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007409"),
            order: NumberInt("7"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        }
    ],
    "delete_at": null,
    "create_at": ISODate("2023-12-17T14:36:17.497Z"),
    "update_at": ISODate("2023-12-17T14:36:17.497Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("timetables").insert([ {
    _id: ObjectId("657f09a2480fc04d049b874c"),
    "class_id": ObjectId("654ba6aef02b000046004940"),
    "start_date": ISODate("2023-10-22T00:00:00.000Z"),
    "list_lesson": [
        {
            "lesson_id": ObjectId("656609b4114a000028007402"),
            order: NumberInt("0"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "subject_id": ObjectId("656ded55a1060000750074d3"),
                    "teacher_id": ObjectId("6579edb370b6146071df7994"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "subject_id": ObjectId("656ded55a1060000750074d3"),
                    "teacher_id": ObjectId("6579edb370b6146071df7994"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007403"),
            order: NumberInt("1"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "subject_id": ObjectId("656ded55a1060000750074d3"),
                    "teacher_id": ObjectId("6579edb370b6146071df7994"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "subject_id": ObjectId("656ded55a1060000750074d3"),
                    "teacher_id": ObjectId("6579edb370b6146071df7994"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007404"),
            order: NumberInt("2"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "subject_id": ObjectId("656ded55a1060000750074d3"),
                    "teacher_id": ObjectId("6579edb370b6146071df7994"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "subject_id": ObjectId("656ded55a1060000750074d3"),
                    "teacher_id": ObjectId("6579edb370b6146071df7994"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007405"),
            order: NumberInt("3"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007406"),
            order: NumberInt("4"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007407"),
            order: NumberInt("5"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007408"),
            order: NumberInt("6"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007409"),
            order: NumberInt("7"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        }
    ],
    "delete_at": null,
    "create_at": ISODate("2023-12-17T14:45:54.061Z"),
    "update_at": ISODate("2023-12-17T14:45:54.061Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("timetables").insert([ {
    _id: ObjectId("6581cf93c6d84d3a38f64f28"),
    "class_id": ObjectId("654ba6aef02b0000460048cc"),
    "start_date": ISODate("2023-10-22T00:00:00.000Z"),
    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
    "list_lesson": [
        {
            "lesson_id": ObjectId("656609b4114a000028007402"),
            order: NumberInt("0"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "subject_id": ObjectId("65884fd3157200000d002804"),
                    "teacher_id": ObjectId("65885f1368cb28534f6a5eb5"),
                    "room_id": ObjectId("6581b9eede38612e37cc49c6"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "subject_id": ObjectId("656ded55a106000075007517"),
                    "teacher_id": ObjectId("657b44ea4a1ef8c0146ffd9e"),
                    "room_id": ObjectId("6581b9cfde38612e37cc49a8"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "subject_id": ObjectId("656ded55a106000075007514"),
                    "teacher_id": ObjectId("657b44ea4a1ef8c0146ffd88"),
                    "room_id": ObjectId("658092fa7b31ac75a13746c5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "subject_id": ObjectId("656ded55a10600007500751a"),
                    "teacher_id": ObjectId("657b44ea4a1ef8c0146ffdb6"),
                    "room_id": ObjectId("658092fa7b31ac75a13746c5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "subject_id": ObjectId("656ded55a10600007500751a"),
                    "teacher_id": ObjectId("657b44ea4a1ef8c0146ffdb6"),
                    "room_id": ObjectId("658092fa7b31ac75a13746c5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "subject_id": ObjectId("656ded55a10600007500751a"),
                    "teacher_id": ObjectId("657b44ea4a1ef8c0146ffdb6"),
                    "room_id": ObjectId("658092fa7b31ac75a13746c5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007403"),
            order: NumberInt("1"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "subject_id": ObjectId("656ded55a106000075007522"),
                    "teacher_id": ObjectId("657b44eb4a1ef8c0146ffdf6"),
                    "room_id": ObjectId("6581b9cfde38612e37cc49a8"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "subject_id": ObjectId("656ded55a106000075007517"),
                    "teacher_id": ObjectId("657b44ea4a1ef8c0146ffd9e"),
                    "room_id": ObjectId("6581b9cfde38612e37cc49a8"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "subject_id": ObjectId("656ded55a106000075007522"),
                    "teacher_id": ObjectId("657b44eb4a1ef8c0146ffdf6"),
                    "room_id": ObjectId("6581b9cfde38612e37cc49a8"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "subject_id": ObjectId("656ded55a10600007500751a"),
                    "teacher_id": ObjectId("657b44ea4a1ef8c0146ffdb6"),
                    "room_id": ObjectId("658092fa7b31ac75a13746c5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "subject_id": ObjectId("656ded55a10600007500751a"),
                    "teacher_id": ObjectId("657b44ea4a1ef8c0146ffdb6"),
                    "room_id": ObjectId("658092fa7b31ac75a13746c5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "subject_id": ObjectId("656ded55a10600007500751a"),
                    "teacher_id": ObjectId("657b44ea4a1ef8c0146ffdb6"),
                    "room_id": ObjectId("658092fa7b31ac75a13746c5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007404"),
            order: NumberInt("2"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "subject_id": ObjectId("656ded55a106000075007522"),
                    "teacher_id": ObjectId("657b44eb4a1ef8c0146ffdf6"),
                    "room_id": ObjectId("6581b9cfde38612e37cc49a8"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "subject_id": ObjectId("656ded55a106000075007517"),
                    "teacher_id": ObjectId("657b44ea4a1ef8c0146ffd9e"),
                    "room_id": ObjectId("6581b9cfde38612e37cc49a8"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "subject_id": ObjectId("656ded55a106000075007522"),
                    "teacher_id": ObjectId("657b44eb4a1ef8c0146ffdf6"),
                    "room_id": ObjectId("6581b9cfde38612e37cc49a8"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "subject_id": ObjectId("656ded55a10600007500751a"),
                    "teacher_id": ObjectId("657b44ea4a1ef8c0146ffdb6"),
                    "room_id": ObjectId("658092fa7b31ac75a13746c5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "subject_id": ObjectId("656ded55a10600007500751a"),
                    "teacher_id": ObjectId("657b44ea4a1ef8c0146ffdb6"),
                    "room_id": ObjectId("658092fa7b31ac75a13746c5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "subject_id": ObjectId("656ded55a10600007500751a"),
                    "teacher_id": ObjectId("657b44ea4a1ef8c0146ffdb6"),
                    "room_id": ObjectId("658092fa7b31ac75a13746c5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007405"),
            order: NumberInt("3"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "subject_id": ObjectId("656ded55a106000075007519"),
                    "teacher_id": ObjectId("657b44ea4a1ef8c0146ffdae"),
                    "room_id": ObjectId("658092fa7b31ac75a13746c5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "subject_id": ObjectId("656ded55a106000075007519"),
                    "teacher_id": ObjectId("657b44ea4a1ef8c0146ffdae"),
                    "room_id": ObjectId("658092fa7b31ac75a13746c5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "subject_id": ObjectId("656ded55a106000075007514"),
                    "teacher_id": ObjectId("657b44ea4a1ef8c0146ffd88"),
                    "room_id": ObjectId("658092fa7b31ac75a13746c5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "subject_id": ObjectId("656ded55a106000075007519"),
                    "teacher_id": ObjectId("657b44ea4a1ef8c0146ffdae"),
                    "room_id": ObjectId("658092fa7b31ac75a13746c5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "subject_id": ObjectId("656ded55a106000075007519"),
                    "teacher_id": ObjectId("657b44ea4a1ef8c0146ffdae"),
                    "room_id": ObjectId("658092fa7b31ac75a13746c5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "subject_id": ObjectId("656ded55a106000075007519"),
                    "teacher_id": ObjectId("657b44ea4a1ef8c0146ffdae"),
                    "room_id": ObjectId("658092fa7b31ac75a13746c5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007406"),
            order: NumberInt("4"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007407"),
            order: NumberInt("5"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007408"),
            order: NumberInt("6"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007409"),
            order: NumberInt("7"),
            "list_subject": [
                {
                    order: NumberInt("0"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("1"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("4"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                },
                {
                    order: NumberInt("5"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
                    "start_date": ISODate("2023-10-22T00:00:00.000Z")
                }
            ]
        }
    ],
    "delete_at": null,
    "create_at": ISODate("2023-12-19T17:14:59.337Z"),
    "update_at": ISODate("2023-12-19T17:14:59.337Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("timetables").insert([ {
    _id: ObjectId("6589ca7e69fd1174b0e6c521"),
    "class_id": ObjectId("654ba6aef02b0000460048d1"),
    "start_date": ISODate("2023-12-26T00:00:00.000Z"),
    "end_date": ISODate("2023-12-31T00:00:00.000Z"),
    "list_lesson": [
        {
            "lesson_id": ObjectId("656609b4114a000028007402"),
            order: NumberInt("0"),
            "list_subject": [
                {
                    order: NumberInt("0")
                },
                {
                    order: NumberInt("1"),
                    "subject_id": ObjectId("656ded55a106000075007519"),
                    "teacher_id": ObjectId("657b44ea4a1ef8c0146ffdae"),
                    "room_id": ObjectId("6581b9e2de38612e37cc49bc"),
                    "start_date": ISODate("2023-12-26T00:00:00.000Z"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "subject_id": ObjectId("656ded55a106000075007519"),
                    "teacher_id": ObjectId("657b44ea4a1ef8c0146ffdae"),
                    "room_id": ObjectId("6581b9e2de38612e37cc49bc"),
                    "start_date": ISODate("2023-12-26T00:00:00.000Z"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "subject_id": ObjectId("656ded55a106000075007519"),
                    "teacher_id": ObjectId("657b44ea4a1ef8c0146ffdae"),
                    "room_id": ObjectId("6581b9e2de38612e37cc49bc"),
                    "start_date": ISODate("2023-12-26T00:00:00.000Z"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z")
                },
                {
                    order: NumberInt("4")
                },
                {
                    order: NumberInt("5"),
                    "subject_id": ObjectId("656ded55a106000075007514"),
                    "teacher_id": ObjectId("657b44ea4a1ef8c0146ffd88"),
                    "room_id": ObjectId("6581b9dbde38612e37cc49b2"),
                    "start_date": ISODate("2023-12-26T00:00:00.000Z"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007403"),
            order: NumberInt("1"),
            "list_subject": [
                {
                    order: NumberInt("0")
                },
                {
                    order: NumberInt("1"),
                    "subject_id": ObjectId("656ded55a106000075007519"),
                    "teacher_id": ObjectId("657b44ea4a1ef8c0146ffdae"),
                    "room_id": ObjectId("6581b9e2de38612e37cc49bc"),
                    "start_date": ISODate("2023-12-26T00:00:00.000Z"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "subject_id": ObjectId("656ded55a106000075007519"),
                    "teacher_id": ObjectId("657b44ea4a1ef8c0146ffdae"),
                    "room_id": ObjectId("6581b9e2de38612e37cc49bc"),
                    "start_date": ISODate("2023-12-26T00:00:00.000Z"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "subject_id": ObjectId("656ded55a106000075007519"),
                    "teacher_id": ObjectId("657b44ea4a1ef8c0146ffdae"),
                    "room_id": ObjectId("6581b9e2de38612e37cc49bc"),
                    "start_date": ISODate("2023-12-26T00:00:00.000Z"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z")
                },
                {
                    order: NumberInt("4")
                },
                {
                    order: NumberInt("5")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007404"),
            order: NumberInt("2"),
            "list_subject": [
                {
                    order: NumberInt("0")
                },
                {
                    order: NumberInt("1"),
                    "subject_id": ObjectId("656ded55a106000075007519"),
                    "teacher_id": ObjectId("657b44ea4a1ef8c0146ffdae"),
                    "room_id": ObjectId("6581b9e2de38612e37cc49bc"),
                    "start_date": ISODate("2023-12-26T00:00:00.000Z"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z")
                },
                {
                    order: NumberInt("2"),
                    "subject_id": ObjectId("656ded55a106000075007519"),
                    "teacher_id": ObjectId("657b44ea4a1ef8c0146ffdae"),
                    "room_id": ObjectId("6581b9e2de38612e37cc49bc"),
                    "start_date": ISODate("2023-12-26T00:00:00.000Z"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z")
                },
                {
                    order: NumberInt("3"),
                    "subject_id": ObjectId("656ded55a106000075007519"),
                    "teacher_id": ObjectId("657b44ea4a1ef8c0146ffdae"),
                    "room_id": ObjectId("6581b9e2de38612e37cc49bc"),
                    "start_date": ISODate("2023-12-26T00:00:00.000Z"),
                    "end_date": ISODate("2023-12-31T00:00:00.000Z")
                },
                {
                    order: NumberInt("4")
                },
                {
                    order: NumberInt("5")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007405"),
            order: NumberInt("3"),
            "list_subject": [
                {
                    order: NumberInt("0")
                },
                {
                    order: NumberInt("1")
                },
                {
                    order: NumberInt("2")
                },
                {
                    order: NumberInt("3")
                },
                {
                    order: NumberInt("4")
                },
                {
                    order: NumberInt("5")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007406"),
            order: NumberInt("4"),
            "list_subject": [
                {
                    order: NumberInt("0")
                },
                {
                    order: NumberInt("1")
                },
                {
                    order: NumberInt("2")
                },
                {
                    order: NumberInt("3")
                },
                {
                    order: NumberInt("4")
                },
                {
                    order: NumberInt("5")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007407"),
            order: NumberInt("5"),
            "list_subject": [
                {
                    order: NumberInt("0")
                },
                {
                    order: NumberInt("1")
                },
                {
                    order: NumberInt("2")
                },
                {
                    order: NumberInt("3")
                },
                {
                    order: NumberInt("4")
                },
                {
                    order: NumberInt("5")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007408"),
            order: NumberInt("6"),
            "list_subject": [
                {
                    order: NumberInt("0")
                },
                {
                    order: NumberInt("1")
                },
                {
                    order: NumberInt("2")
                },
                {
                    order: NumberInt("3")
                },
                {
                    order: NumberInt("4")
                },
                {
                    order: NumberInt("5")
                }
            ]
        },
        {
            "lesson_id": ObjectId("656609b4114a000028007409"),
            order: NumberInt("7"),
            "list_subject": [
                {
                    order: NumberInt("0")
                },
                {
                    order: NumberInt("1")
                },
                {
                    order: NumberInt("2")
                },
                {
                    order: NumberInt("3")
                },
                {
                    order: NumberInt("4")
                },
                {
                    order: NumberInt("5")
                }
            ]
        }
    ],
    "delete_at": null,
    "create_at": ISODate("2023-12-25T18:31:26.92Z"),
    "update_at": ISODate("2023-12-25T18:31:26.92Z"),
    __v: NumberInt("0")
} ]);
