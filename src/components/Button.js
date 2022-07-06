import classNames from "classnames";

function Button({ children, variant = 'default', type = 'button' }) {
    return(
        <button type={type} className={classNames({
            "p-4 h-10 flex items-center bg-gray-100 rounded mb-2": true,
            "bg-gray-100": variant === "default",
            "bg-green-600 text-white": variant === "success",
            "bg-red-600 text-white": variant === "danger",
            "bg-yellow-300 text-black/70": variant === "warning"
        })}>{children}</button>
    );
}

export default Button;