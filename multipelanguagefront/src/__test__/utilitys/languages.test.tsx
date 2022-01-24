import React from "react";
import {
  getLanguageEnum,
  getLanguageText,
  getSettingByLanguage,
  getSettingByField,
  getSettingByLanguageWithField,
} from "../../utilitys/languages";

describe("test of languages", () => {
  test("test of getLanguageEnum", () => {
    const result = getLanguageEnum("en-AU");
    expect(result).toBe(1);
  });

  test("test of getLanguageText", () => {
    const result = getLanguageText(1);
    expect(result).toBe("en-AU");
  });

  const settingList = [
    {
      id: 1,
      fieldName: "name",
      fieldValue: "xixi",
      language: 1,
    },
    {
      id: 2,
      fieldName: "title",
      fieldValue: "xiaoming",
      language: 2,
    },
  ];

  test("test of getSettingByLanguage", () => {
    const result = getSettingByLanguage(1,settingList);
    expect(result).toStrictEqual([{"fieldName": "name", "fieldValue": "xixi", "id": 1, "language": 1}]);
  });

  test("test of getSettingByField", () => {
    const result = getSettingByField('name',settingList);
    expect(result).toStrictEqual([{"fieldName": "name", "fieldValue": "xixi", "id": 1, "language": 1}]);
  });

  test("test of getSettingByField", () => {
    const result = getSettingByLanguageWithField('title',2,settingList);
    expect(result).toStrictEqual({"fieldName": "title", "fieldValue": "xiaoming", "id": 2, "language": 2});
  });
});
