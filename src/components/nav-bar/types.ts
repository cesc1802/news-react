export interface IMenuItem {
  displayText: string;
  subMenu: IMenuItem[];
}

export interface INavBar {
  displayText: string;
  subMenu?: INavBar[];
}

export const NavBarItems: INavBar[] = [
  {
    displayText: "TGP HÀ NỘI",
    subMenu: [
      {
        displayText: "Giới Thiệu",
      },
      {
        displayText: "Linh mục đoàn",
        subMenu: [
          {
            displayText: "Danh sách linh mục từ năm 1835",
          },
          {
            displayText: "Các linh mục hiện tại",
          },
        ],
      },
      {
        displayText: "Đâng bản quyền",
      },
      {
        displayText: "Các uỷ ban",
      },
      {
        displayText: "Giáo hạt",
      },
      {
        displayText: "Các Giáo xứ",
      },
      {
        displayText: "Liên hệ",
      },
      {
        displayText: "Thông báo",
      },
      {
        displayText: "Những Ngày đáng nhớ",
      },
    ],
  },
  {
    displayText: "THỜI SỰ",
    subMenu: [
      {
        displayText: "",
      },
    ],
  },
  {
    displayText: "SỐNG ĐẠO",
    subMenu: [
      {
        displayText: "",
      },
    ],
  },
  {
    displayText: "ƠN GỌI",
    subMenu: [
      {
        displayText: "",
      },
    ],
  },
  {
    displayText: "PHỤNG VỤ",
    subMenu: [
      {
        displayText: "",
      },
    ],
  },
  {
    displayText: "GIÁO LÝ",
    subMenu: [
      {
        displayText: "",
      },
    ],
  },
  {
    displayText: "TƯ LIỆU",
    subMenu: [
      {
        displayText: "",
      },
    ],
  },
  {
    displayText: "MEDIA",
    subMenu: [
      {
        displayText: "",
      },
    ],
  },
];
