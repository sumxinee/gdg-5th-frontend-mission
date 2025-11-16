import logoImg from "../assets/gdg_logo.svg";

const Navbar = () => {
    return (
        <div className="fixed flex h-[60px] w-full items-center justify-around border-b border-[#D2D2D2] bg-white">
            <div className="w-[80px]">
                <img src={logoImg} alt="logo" />
            </div>

            <div className="flex flex-row gap-[22px] font-semibold text-[#848F92]">
                <div
                    className="cursor-pointer"
                    onClick={() => console.log("카테고G리 필터링 클릭")}
                >
                    카테고리 필터링
                </div>

                <div
                    className="cursor-pointer"
                    onClick={() => console.log("가격 범위 필터링 클릭")}
                >
                    가격 범위 필터링
                </div>

                <div
                    className="cursor-pointer"
                    onClick={() => console.log("상품 정렬 클릭")}
                >
                    상품 정렬
                </div>
            </div>

            <div>
                <button
                    className="rounded-[8px] border border-blue-500 p-[6px] text-[16px] text-blue-500 hover:cursor-pointer"
                    onClick={() => console.log("관리자 페이지 클릭")}
                >
                    관리자
                </button>
            </div>
        </div>
    );
};

export default Navbar;