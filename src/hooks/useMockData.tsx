import { CategoryProps } from "@/models/category";
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

  return { categories };
};

export default useMockData;
