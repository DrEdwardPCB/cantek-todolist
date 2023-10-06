export const Footer = () => {
    return (
        <div className=" bottom-0 h-20 mt-20 w-full flex text-center flex-col gap-2 items-center justify-center">
            <p> Copy right Edward Wong 2023 - {new Date().getFullYear()}</p>
            <p>
                {" "}
                this todo list is only used for assignment project for edward
                when attending cantek 2023 Oct web development course{" "}
            </p>
        </div>
    );
};
