//di halaman ini disebutnya client side
//menggunakan use client agar fitur seperti onclcik, usetate dll bisa digunakan
'use client'

const ViewUserButton = () => {
    const handleClick = () => alert('AKU DI KLIK');
    return (
        <>
            <button onClick={handleClick}>Lihat User</button>
        </>
        )
}

export default ViewUserButton;