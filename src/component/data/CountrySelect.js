import React from "react";

function CountrySelect() {
  const countryData = [
    {
      id: "en",
      name: "Âu mỹ",
    },
    {
      id: "ko",
      name: "Hàn Quốc",
    },
    {
      id: "fr",
      name: "Pháp",
    },
    {
      id: "",
      name: "Canada",
    },
    {
      id: "ja",
      name: "Nhật bản",
    },
    {
      id: "cn",
      name: "Trung quốc",
    },
    {
      id: "hi",
      name: "Ấn độ",
    },
    {
      id: "th",
      name: "Thái lan",
    },
    {
      id: "en",
      name: "Úc",
    },
    {
      id: "vi",
      name: "Việt Nam",
    },
    {
      id: "de",
      name: "Đức",
    },
    {
      id: "ru",
      name: "Nga",
    },
    {
      id: "fi",
      name: "Phần Lan",
    },
    {
      id: "es",
      name: "Tây Ban Nha",
    },
    {
      id: "ms",
      name: "Malaysia",
    },
    {
      id: "id",
      name: "Indonesia",
    },
    {
      id: "tl",
      name: "Philipines",
    },
    {
      id: "pt",
      name: "Brazin",
    },
    {
      id: "es",
      name: "Mexico",
    },
  ];
  const countryOption = countryData.map((country) => {
    return <option value={country.id}>{country.name}</option>;
  });
  return (
    <>
      <option value="">- Tất cả -</option>
      {countryOption}
    </>
  );
}

export default CountrySelect;
