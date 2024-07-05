function solve(base, increment) {
    let step = 0
    let stone = 0;
    let marble = 0;
    let lapiz = 0;
    let gold = 0;

    let isEven = true;
    if (base % 2 !== 0) {
        isEven = false;
    }

    while (base > 0) {
        step++;
        base -= 2;

        if (base <= 0) {
            let topLayer;
            if (isEven) {
                topLayer = 4;
            } else {
                topLayer = 1;
            }
            
            gold += topLayer * increment;
            break;
        }
       
        let area = (base * base);
        let areaBeforeDecreased = base + 2;
        stone += area * increment;

        if (step % 5 === 0) {
            lapiz += ((areaBeforeDecreased * areaBeforeDecreased) - area) * increment;
        } else {
            marble += ((areaBeforeDecreased * areaBeforeDecreased) - area) * increment;
        } 
    }

    let height = step * increment

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapiz)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
}

solve(23, 0.5);