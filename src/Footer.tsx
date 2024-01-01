const Footer = () => {
    return (
        <div className="w-full mb-2 h-fit flex flex-col items-center">
            <div className='h-[1px] w-11/12 opacity-50 mt-10'
                style={{ backgroundColor: 'var(--color-text)' }} />
            <p className="font-thin text-xs mt-1">
                <a href="https://wojwozniak.com" target="_blank" className="text-gold hover:underline">wojwozniak</a>, XII 2023
            </p>
        </div>
    )
}

export default Footer