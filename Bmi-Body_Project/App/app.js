
function isValid() {
    var Height = document.getElementById('Height').value;
    var Weight = document.getElementById('Weight').value;

    var isvalid_text = document.getElementById('result-text');
    var isvalid_num=document.getElementById('result-number');
    try {
        if (Height == "") throw "لطفا قد خود را وارد کنید!";
        if (Weight == "") throw "لطفا وزن خود را وارد کید!";
        var HeightF = parseFloat(Height);
        var HeightF = (HeightF * HeightF) / 10000;
        var WeightF = parseFloat(Weight);
        var Result = WeightF / HeightF;
        Result = Result.toFixed(2);
        if (Result < 16.5) throw "شما کمبود وزن شدید دارید!";
        else if (Result > 16.5 & Result < 18.5) throw "شما کمبود وزن دارید!";
        else if (Result > 18.5 & Result < 25) throw "وزن شما نرمال است";
        else if (Result > 25 & Result < 30) throw "شما اضافه وزن دارید !";
        else if (Result > 30 & Result < 35) throw "شما دارای چاقی نوع 1 هستید !";
        else if (Result > 35 & Result < 40) throw "شما دارای چاقی نوع 2 هستید !";
        else (Result > 40)
        throw "شما دارای چاقی نوع 3 هستید(شدید)";

    } catch (err) {
        isvalid_text.innerHTML = err;

    }
    finally{
        isvalid_num.innerHTML=Result;
    }
}