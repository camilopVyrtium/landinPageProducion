type Props = {
    children: React.ReactNode;
    maximaze: boolean;
    setMaximaze: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Maximaze = ({ children, maximaze, setMaximaze }: Props) => {
    return (
        <div className={maximaze ? "fixed top-0 right-0 left-0 bottom-0 py-20 bg-black z-50 maximaze" : ''} >
            {maximaze && <div className="absolute right-4 top-4 font-bold text-[48px] text-white cursor-pointer" onClick={() => { setMaximaze(false) }}>X</div>}
            {children}
        </div >
    )
}