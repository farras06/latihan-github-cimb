
        let Jeruk = 5000
        let Apel = 10000
        let Mangga = 5000
        let Pir = 10000
        let JerukJumlah = 10
        let ApelJumlah = 10
        let ManggaJumlah = 10
        let PirJumlah = 10

        let condition = true

        text1 = "apakah anda ingin belanja"



        do {
            let JerukInput = prompt("Jumlah jeruk yang igin anda beli")

            if (JerukInput > JerukJumlah) {
                alert('Jumlah jeruk tidak mencukupi')
                condition = true
            } else {
                alert('Jumlah Jeruk yang anda beli ' + JerukInput)
                condition = false
            }

        } while (condition)



        do {
            let ApelInput = prompt("Jumlah Apel Yang ingin anda beli")

            if (ApelInput > ApelJumlah) {
                alert('Jumlah Apel tidak mencukupi')
                condition = true
            } else {
                alert('Jumlah Apel Yang Anda Beli ' + ApelInput)
                condition = false
            }

        } while (condition)


        do {
            let ManggaInput = prompt("Jumlah Mangga yang ingin anda beli")

            if (ManggaInput > ManggaJumlah) {
                alert('jumlah mangga tidak mencukupi')
                condition = true
            } else {
                alert('Jumlah Mangga yang anda beli ' + ManggaInput)
                condition = false
            }

        } while (condition)


        do {
            let PirInput = prompt("Jumlah Pir yang ingin anda beli")

            if (PirInput > PirJumlah) {
                alert('Jumlah pir tidak mencukupi')
                condition = true
            } else {
                alert('Jumlah pir yang anda beli ' + PirInput)
                alert(JerukInput)
                condition = true
            }

        } while (condition)


        alert(JerukInput)

        // let TotalHarga = ((Jeruk*JerukInput) + (Apel*ApelInput) + (Pir*PirInput) + (Mangga*ManggaInput))
        // parseInt(TotalHarga)

        // alert( "Harga dari belanja anda adalah Rp. " + TotalHarga )


        // let Payment = prompt("Jumlah uang yang ingin anda gunakan untuk membayar")

        // if (Payment == TotalHarga){

        //     alert("Terima kasih")
        // } else if (Payment < TotalHarga){
        //     alert("Uang anda tidak mencukupi sebanyak " + (TotalHarga - Payment))
        // } else if (Payment> TotalHarga){
        //     alert ("Kembalian Anda Sebesar " + (Payment - TotalHarga) + " Terima Kasih")
        // }