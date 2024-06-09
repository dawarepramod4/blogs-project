export default function UserAvatar({
    userName,
    size,
}: {
    userName: string;
    size: "small" | "medium" | "large";
}) {
    var sizeStyle = "";
    var font = "";
    switch (size) {
        case "large":
            sizeStyle = "w-10 h-10";
            font = "font-large";
            break;

        case "medium":
            sizeStyle = "w-10 h-10";
            font = "font-medium";
            break;
        case "small":
            sizeStyle = "h-5 w-5 p-3";
            font = "text-xs";
    }
    var style = `relative inline-flex items-center justify-center  overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ${sizeStyle}`;
    var fontStyle = `text-gray-600 dark:text-gray-300 ${font}`;
    return (
        <>
            <div className={style}>
                <span className={fontStyle}>{getInitials(userName)}</span>
            </div>
        </>
    );
}

function getInitials(userName: string) {
    // Split the string into words using any whitespace character as delimiter
    const words = userName.split(/\s+/);

    // Check if there are at least two words
    if (words.length < 2) {
        return "UN"; // Return empty string if less than 2 words
    }

    // Get the first letter of each of the first two words and uppercase them
    return words[0].charAt(0).toUpperCase() + words[1].charAt(0).toUpperCase();
}
