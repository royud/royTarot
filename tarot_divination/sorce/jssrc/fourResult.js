        //랜덤 드로우
        const randomDraw = function(a){
            const numbering = Math.floor(Math.random()*a.length);
            const numbering_card = a[numbering];
            if(numbering_card.card_direction === "역방향"){
                a.splice(numbering - 1, 2)
            } else {
                a.splice(numbering, 2)
            };
            return numbering_card;
        };

        //3장 출력
        const result = [];
        for(i = 0; i < 4; i++){
            const random_card = randomDraw(card_deck)
            result.push(random_card);
        }
            const Id = document.getElementById("cardZone");
            Id.innerHTML = 
                `<div class = "cardex">
                    <div class = "timeName">
                        <span class = "timeLine">아침/과거</span>
                    </div>
                    <div class = "card">
                        <img src= ${result[0].card} />
                    </div>
                    <div class = "explain">
                        <span class = "card_name">${result[0].card_name}</span>
                        <span class = "card_direction">${result[0].card_direction}</span>
                        <span class = "card_explain">${result[0].card_explain}</span>
                    </div>
                </div>
                <div class = "cardex">
                    <div class = "timeName">
                        <span class = "timeLine">점심/현재</span>
                    </div>
                    <div class = "card">
                        <img src= ${result[1].card} />
                    </div>
                    <div class = "explain">
                        <span class = "card_name">${result[1].card_name}</span>
                        <span class = "card_direction">${result[1].card_direction}</span>
                        <span class = "card_explain">${result[1].card_explain}</span>
                    </div>
                </div>
                <div class = "cardex">
                    <div class = "timeName">
                        <span class = "timeLine">저녁/미래</span>
                    </div>
                    <div class = "card">
                        <img src= ${result[2].card} />
                    </div>
                    <div class = "explain">
                        <span class = "card_name">${result[2].card_name}</span>
                        <span class = "card_direction">${result[2].card_direction}</span>
                        <span class = "card_explain">${result[2].card_explain}</span>
                    </div>
                </div>
                <div class = "cardex">
                    <div class = "timeName">
                        <span class = "timeLine">조언</span>
                    </div>
                <div class = "card">
                    <img src= ${result[3].card} />
                </div>
                    <div class = "explain">
                        <span class = "card_name">${result[3].card_name}</span>
                        <span class = "card_direction">${result[3].card_direction}</span>
                        <span class = "card_explain">${result[3].card_explain}</span>
                    </div>
                </div>
                `