import { useState } from "react";
import BlueButton from "../admin/BlueButton";
import ToggleInput from "../admin/ToggleInput"

const FlexStyle = "flex w-[285px] justify-between items-center";
const InputStyle =
  "placeholder:text-[14px] w-[205px] h-[39px] rounded-[8px] border border-[#8F8F8F] px-[12px] py-[6px]";
const API_URL = import.meta.env.VITE_API_URL;

const StockBox = ({
  stockExist = true,
  section2Exist = false,
  comment = false,
}) => {
  // 상태
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [count, setCount] = useState(0);
  // 카테고리 값
  const [category, setCategory] = useState("");

  // 상품 등록 api ---------------------------------------------
  async function handleRegister() {
    console.log("상품 등록 버튼 클릭");

    if (itemName === "") {
      alert("상품명을 입력해주세요.");
      return;
    }

    try {
      // ...
    } catch (error) {
      console.log("데이터 POST 실패: ", error.message || null);
    }
  }

  // 재고 추가 api ---------------------------------------------
  async function handleIncrease() {
    console.log("추가 버튼 클릭");

    if (itemName === "") {
      alert("상품명을 입력해주세요.");
      return;
    }

    try {
      // ...
    } catch (error) {
      console.log("Error POST data: ", error);
    }
  }

  // 상품 삭제 api ---------------------------------------------
  async function handleDelete() {
    console.log("추가 버튼 클릭");

    if (itemName === "") {
      alert("상품명을 입력해주세요.");
      return;
    }

    try {
      // ...
    } catch (error) {
      console.log("Error POST data: ", error);
    }
  }

  return (
    <>
      <div className="mb-[72px] flex w-full flex-col gap-[9px] rounded-[8px] border border-[#8F8F8F] px-[24px] py-[20px]">
        <section className="flex justify-between">
          <div className={FlexStyle}>
            <div>상품명</div>
            <input
              value={itemName}
              onChange={e => setItemName(e.target.value)}
              className={InputStyle}
              placeholder="상품명 입력..."
            />
          </div>

          {/* 수량은 [상품 등록]인 경우 stock, [재고 추가]인 경우 count 이다. */}
          {stockExist ? (
            <div className={FlexStyle}>
              <div>수량</div>
              <input
                type="number"
                value={section2Exist ? stock : count}
                onChange={e =>
                  section2Exist
                    ? setStock(e.target.value)
                    : setCount(e.target.value)
                }
                className={InputStyle}
                placeholder="개수 입력..."
              />
            </div>
          ) : null}
        </section>
        {section2Exist ? (
          <section className="flex justify-between">
            <div className={FlexStyle}>
              <div>가격</div>
              <input
                type="number"
                value={price}
                onChange={e => setPrice(e.target.value)}
                className={InputStyle}
                placeholder="가격 입력..."
              />
            </div>
            <div className={FlexStyle}>
              <div>카테고리</div>
              <ToggleInput
                category={category}
                setState={setCategory}
                className="ml-[30px] h-[39px] w-[205px] rounded-[8px] border border-[#8F8F8F] px-[12px] py-[6px] placeholder:text-[14px]"
                togglePlaceholder={"카테고리 선택"}
              />
            </div>
          </section>
        ) : null}

        <section className="mt-[7px] flex items-center justify-between">
          {comment ? (
            <div className="text-[14px] text-[#A5A5A5]">
              * 추가 기능을 카테고리로 설정한 경우에만 카테고리를 이용헤주세요.
            </div>
          ) : (
            <div></div>
          )}
          {!stockExist ? (
            <BlueButton
              onClick={handleDelete}
              className="h-[31px] bg-[#F00]"
              text={"삭제"}
            />
          ) : !section2Exist ? (
            <BlueButton
              onClick={handleIncrease}
              className="h-[31px]"
              text={"추가"}
            />
          ) : (
            <BlueButton
              onClick={handleRegister}
              className="h-[31px]"
              text={"등록"}
            />
          )}
        </section>
      </div>
    </>
  );
};
export default StockBox;
