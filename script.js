// Массив с ссылками на изображения для каждой кнопки
const imageSources = [
    ["/image/image1.png", "/image/image2.png", "/image/image3.png", "/image/image7.png", "/image/image8.png", "/image/image9.png", "/image/image4.png", "/image/image5.png", "/image/image6.png"],
    ["/image/image4.png", "/image/image5.png", "/image/image6.png", "/image/image1.png", "/image/image2.png", "/image/image3.png", "/image/image7.png", "/image/image8.png", "/image/image9.png"],
    ["/image/image7.png", "/image/image8.png", "/image/image9.png", "/image/image1.png", "/image/image2.png", "/image/image3.png", "/image/image4.png", "/image/image5.png", "/image/image6.png",]
];

// Функция для смены изображения в ячейках сетки
function changeImage(buttonNumber) {
    const cellIds = ["cell1", "cell2", "cell3", "cell4", "cell5", "cell6", "cell7", "cell8", "cell9"];
    const images = imageSources[buttonNumber - 1];

    for (let i = 0; i < cellIds.length; i++) {
        const cell = document.getElementById(cellIds[i]);
        const img = cell.querySelector("img");
        img.src = images[i];
    }
}
