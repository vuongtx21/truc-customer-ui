import { CategoryProps } from "@/models/category";
import { ProductProps } from "@/models/product";
import { useMemo } from "react";

const useMockData = () => {
  const categories = useMemo(
    (): CategoryProps[] => [
      {
        id: "5",
        name: "Thực phẩm chức năng",
        to: "thuc-pham-chuc-nang",
        children: [
          {
            id: "69",
            name: "Vitamin & Khoáng chất",
            to: "thuc-pham-chuc-nang/vitamin-khoang-chat",
            imgUrl:
              "https://cdn.nhathuoclongchau.com.vn/unsafe/https://cms-prod.s3-sgn09.fptcloud.com/smalls/tpcn_vitamin_khoang_chat_level_2_91b99b5a64.png",
            children: [
              {
                id: "553",
                name: "Bổ sung Canxi & Vitamin D",
                to: "thuc-pham-chuc-nang/canxi-vitamin-D",
                imgUrl:
                  "https://cdn.nhathuoclongchau.com.vn/unsafe/https://cms-prod.s3-sgn09.fptcloud.com/bo_sung_canxi_vitamin_d_level_3_1cac767906.png",
              },
              {
                id: "550",
                name: "Vitamin tổng hợp",
                to: "thuc-pham-chuc-nang/vitamin-tong-hop",
                imgUrl:
                  "https://cdn.nhathuoclongchau.com.vn/unsafe/https://cms-prod.s3-sgn09.fptcloud.com/tpcn_vitamin_tong_hop_level_3_6254452b91.png",
              },
              {
                id: "555",
                name: "Dầu cá, Omega 3, DHA",
                to: "thuc-pham-chuc-nang/dau-ca-omega-3-dha",
                imgUrl:
                  "https://cdn.nhathuoclongchau.com.vn/unsafe/https://cms-prod.s3-sgn09.fptcloud.com/dau_ca_omega_3_dha_level_3_814328177f.png",
              },
              {
                id: "554",
                name: "Vitamin C các loại",
                to: "thuc-pham-chuc-nang/vitamin-c",
                imgUrl:
                  "https://cdn.nhathuoclongchau.com.vn/unsafe/https://cms-prod.s3-sgn09.fptcloud.com/tpcn_vitamin_c_cac_loai_level_3_92215a0f32.png",
              },
            ],
          },
        ],
      },
      {
        id: "2",
        name: "Dược mỹ phẩm",
        to: "duoc-my-pham",
        children: [
          {
            id: "48",
            name: "Chăm sóc da mặt",
            to: "duoc-my-pham/cham-soc-da-mat",
            imgUrl:
              "https://cdn.nhathuoclongchau.com.vn/unsafe/https://cms-prod.s3-sgn09.fptcloud.com/smalls/cham_soc_da_mat_level_2_83d5e5f264.png",
            children: [
              {
                id: "444",
                name: "Sữa rửa mặt (Kem, gel, sữa)",
                to: "duoc-my-pham/sua-rua-mat-kem-gel-sua",
                imgUrl:
                  "https://cdn.nhathuoclongchau.com.vn/unsafe/https://cms-prod.s3-sgn09.fptcloud.com/sua_rua_mat_kem_gel_sua_level_3_b58238bc61.png",
              },
              {
                id: "450",
                name: "Chống nắng da mặt",
                to: "duoc-my-pham/chong-nang-da-mat",
                imgUrl:
                  "https://cdn.nhathuoclongchau.com.vn/unsafe/https://cms-prod.s3-sgn09.fptcloud.com/chong_nang_da_mat_level_3_cf98e4420a.png",
              },
            ],
          },
        ],
      },
      { id: "3", name: "Tiêm chủng", to: "tiem-chung", children: [] },
    ],
    []
  );

  const products = useMemo(
    (): ProductProps[] => [
      {
        id: "00039538",
        name: "Viên sủi Kudos Bone hương cam bổ sung canxi, vitamin K2, vitamin D3 cho cơ thể (20 viên)",
        imgUrl:
          "https://cdn.nhathuoclongchau.com.vn/unsafe/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09344_b38a024079.jpg",
        price: 113000.0,
        specification: "Tuýp 20 Viên",
        measureUnitName: "Tuýp",
      },
      {
        id: "00039925",
        name: "Viên sủi Kudos Vitamin C 1000mg hương chanh giúp bổ sung vitamin C cho cơ thể (20 viên)",
        imgUrl:
          "https://cdn.nhathuoclongchau.com.vn/unsafe/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09324_db795e136a.jpg",
        price: 113000.0,
        specification: "Tuýp 20 Viên",
        measureUnitName: "Tuýp",
      },
      {
        id: "00041031",
        name: "Kem thoa da Tiacortisol dưỡng ẩm, làm mềm dịu vùng da bị khô, nhờn (8g)",
        imgUrl:
          "https://cdn.nhathuoclongchau.com.vn/unsafe/https://cms-prod.s3-sgn09.fptcloud.com/DSC_00435_7908a5a347.jpg",
        price: 12000.0,
        specification: "Hộp x 8g",
        measureUnitName: "Hộp",
      },
      {
        id: "00503082",
        name: "Sáp dưỡng ẩm Vaseline Original Fobelife làm mềm da, làm dịu da khi bị khô rát, nứt nẻ (7g)",
        imgUrl:
          "https://cdn.nhathuoclongchau.com.vn/unsafe/https://cms-prod.s3-sgn09.fptcloud.com/00503082_sap_duong_am_vaseline_original_fobelife_7g_5786_6406_large_f85fc68701.jpg",
        price: 35000.0,
        specification: "Hũ x 7g",
        measureUnitName: "Hũ",
      },
    ],
    []
  );

  return { categories, products };
};

export default useMockData;
