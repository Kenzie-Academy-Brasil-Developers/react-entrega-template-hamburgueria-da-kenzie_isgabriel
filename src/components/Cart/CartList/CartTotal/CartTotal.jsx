import React from "react";

export function CartTotal({ cartTotal, clearCart }) {
    return (
        <section className="sectionCartTotal">
            <div className="divCartTotal__desc">
                <h3 className="divCartTotal__desc--title">Total</h3>
                <p className="divCartTotal__desc--value">R$ {cartTotal}</p>
            </div>
            <button onClick={clearCart} className="removeAllFromCartBtn">
                Remover todos
            </button>
        </section>
    );
}
