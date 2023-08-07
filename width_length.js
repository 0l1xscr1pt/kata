const areaOrPerimeter = function(length , width) {
    if (length === width) {
        let area = length * width;
        return area;
    } else {
        let perimeter = (length + width) * 2;
        return perimeter;
    }
}