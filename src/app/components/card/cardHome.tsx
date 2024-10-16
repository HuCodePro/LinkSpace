import React from 'react'

function Cardhome() {
    const posts = [
        {
            title: "À quoi sert LinkSpace ?",
            img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            href: "/"
        },
        {
            title: "Comment ça fonctionne ?",
            img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            href: "/"
        },
        {
            title: "7 Promising VS Code Extensions Introduced in 2022",
            img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            href: "/"
        },
    ];

    return (
        <div>
            <section className=" py-20 rounded-3xl bg-white ">
                <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                    <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
                        <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">Différentes informations de LinkSpace</h1>

                    </div>
                    <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            posts.map((item, key) => (
                                <li className="w-full mx-auto group sm:max-w-sm" key={key}>
                                    <a href={item.href}>
                                        <img src={item.img} loading="lazy" alt={item.title} className="w-full rounded-3xl" />
                                        <div className="mt-3 space-y-2">
                                            <h3 className="text-lg text-gray-800 duration-150 group-hover:text-blue-600 font-semibold">
                                                {item.title}
                                            </h3>
                                        </div>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Cardhome;
