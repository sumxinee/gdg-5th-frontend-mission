import { useState } from "react";
import logoImg from "../assets/gdg_logo.svg";

const Content = () => {
    const [content, setContent] = useState("");

    const handleInput = (e) => {
        setContent(e.target.value);
    };

    return (
        <div className="fixed top-[60px] w-full flex justify-center">
            <div className="w-[652px]">
                <div className="mt-[50px] flex flex-row gap-[20px] justify-center">
                    <input
                        className="h-[43px] w-[484px] rounded-[8px] border border-[#8F8F8F] px-[16px] py-[12px]"
                        placeholder="상품 검색..."
                        onChange={handleInput}
                        value={content}
                    />
                    <button
                        className="flex h-[43px] w-[148px] items-center justify-center rounded-[8px] bg-[#008CFF] px-[16px] py-[12px] text-white hover:cursor-pointer"
                        onClick={() => console.log(content)}
                    >
                        검색
                    </button>
                </div>

                <div className="absolute top-1/2 left-1/2 flex h-[300px] w-[400px] -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center">
                    <img
                        src={logoImg}
                        alt="logo_background"
                        className="opacity-[0.15]"
                    />
                    <p className="mt-4 text-center text-[#8F8F8F]">
                        검색 결과가 없습니다.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Content;