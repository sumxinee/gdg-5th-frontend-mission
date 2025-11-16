const FooterButton = () => {
    return (
        <div className="fixed bottom-[40px] w-full flex items-center justify-center">
            <button 
                className="flex justify-center w-[652px] rounded-[8px] border-[2px] border-[#008CFF] bg-white px-[16px] py-[12px] text-[#008CFF] hover:cursor-pointer"
                onClick={() => console.log("장바구니 버튼 클릭")}
            >
                장바구니 구매하기
            </button>
        </div>
    )
}

export default FooterButton;