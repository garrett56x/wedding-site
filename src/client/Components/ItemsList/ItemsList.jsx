import React from "react";
import ItemCard from "../ItemCard/ItemCard.jsx";

export default function ItemsList({ title, items }) {
    return (
        <div>
            <h2 className="title">{title}</h2>
            {items.map((item) => (
                <ItemCard item={item} />
            ))}
        </div>
    )
}
