import React from 'react';
import { View, Text, ImageBackground, Button, StyleSheet, ScrollView } from 'react-native';
import Fundo from '/imagens/fundoverde.jpg';

const Card = ({ title, image }) => (
  <View style={styles.card}>
    <ImageBackground source={{ uri: image }} style={styles.image} />
    <Text style={styles.title}>{title}</Text>
    <Button title="Reservar" onPress={() => { }} />
  </View>
);

export default function Reservas() {
  return (
    <View style={styles.container}>
      <ImageBackground source={Fundo} style={styles.image}>
        <Text style={styles.text}>Carros</Text>
        <View style={styles.cardContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Card title="QUALIDADE PARA UM CONFORTO E OTIMO PASSEIO" image="url_da_imagem_1" />
            <Card title="DESIGN E CONFORTO EM UM Rider GT 3.0 ou similar" image="url_da_imagem_2" />
            <Card title="FORCA PARA DESAFIOS OFF-Road Viper GT 3.0 ou similar" image="url_da_imagem_3" />
            <Card title="FORCA PARA DESAFIOS OFF-Road Viper GT 3.0 ou similar" image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgVEhUZGRgYGBgYGRgZGBgaGBgYGBgaGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMDw8QERERGDEdGB00NDExMTE0MTE3MT8xMTQ3Pzc/Pz8xNDQ6PzExPzcxMTE/MTE2MUA0NDQxPzMxMTE0QP/AABEIALcBEwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABJEAACAQIDBQQGBgcGAwkAAAABAgADEQQSIQUGMUFRE2FxkSIyQoGhwQcjUnKx0RQVM2KCkvAkk7LC0uE0U3MWFyVDg6Kz4vH/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQMC/8QAGREBAQEBAQEAAAAAAAAAAAAAAAERAiEx/9oADAMBAAIRAxEAPwDCw4IJUHBCghSoIV4JAcEEMCAVodooCKCwEAQwIsLFBIDYWHaOhIeSA1lgyx/s4MkBjLBlj+SDJAYywZY/kgyQGMsGWP8AZwskBi0LLH8kIpAZtE2jxSEVgM2hWjxWIKwEQooiFaAIUEKAcEKCAcEK8EArwXgglQLwQiYAYUcUIkRQkChFgRKxxRAAWOKsNVjipASqxQSPKkcVIDApxYSSVpxYpwIopwdnJgpwxTgQ+zg7OTeyihhz0PlAgdnB2csRhXPBW8jFDAP9hvIwKvs4DTlp+rn+wfhB+ran2D8IFSacSactzsyp9g/D84X6qq8qbeUCnKRL07eQ/DWXD7Irf8p/cjH8BGq+zqtyeyqDU+w/5QKlkiCsmVaJX1gR4gj8YyywIxWIYSQyxllgNGIMdYRBEBMOFBKDghXgkCbwXiYJQd4LwoBAWDFLEiLUQHEEfQRtBJCLAUix9EhIkkokgJUjypFokmYbCFhc6LewNrknmEXix+A5kDWBFSnE1MRSQ2qVUQjiNWYdxVbkHuNovbByoVVzT65T6Z7mcer91fAlpkRhVvw0hNa+ntbAjjUZv4KnwAUW8zLTDbU2fa7P7jTqfJPnMIlJRwAkvBYdXdEbQO6qToLAnU3PdCt2m3dnDg4HhSf/AEx5d4sB9s/3b/6ZB/7NYYlRcBVXVlZMzNfQnTpM7t/CU6NTJTOZcoNyVJuSbi4HdImtdV3pwK8DUb7qH/MRGP8AthguaVj/AAJ/rmB7RfswOqm1hxlNdBXfHBfYqjxRfk5kjCbfo4iotHCrmdgxLOrBEVRqSBqx6C4HeNL80WgWYJTUs7EKqjiSeE6ju9sVcJTILDtWXNWqaWReORSf64seQhVumHRTY3qPz4Ki/eA0HHhq3jIWN3mw1A5alakjD2EXO47rC/8AhEwW8+9jVSaWGYpRW+oJDVNdSW4hSfeb3PG0y6Yiwsth4KBA6lV+kTCrr/aGHUUlA/8AdYwD6RcN9isQR0p+N/WnMBVLWUnQkDlIqsRdT7J+Bvp5hoHWT9IWGOjUqxHXJTYHyaMtvLsqrpUQKTzeg6n+dR85zWixtoe6PJA6PR3f2bif+FrgHpTqB/NWuR8JV7U+j/EpdqLLVXp6j+RNj5zHOPbXR11DLowt9lhqD3zo+5G+DVCMPiWu9ro+g7RRyI5OPjA5viKLIzJUUqymzKwsQehEjsZt/pH2PUSu2Jtmp1cgzAeoyoqZX8ctwefDxxLCUIJgvAYmAq8ETeCEFChXhXkUq8MGNkwwZQ8scWMqY6hgSEElUxItMyXTkEmmJKprG8HQZ2CoLk8ugHEk8ABxJOgl/gKKKudG051hcZu6hzC8s/E+zYekSWk4TZ9r9oAWHFDfKn/UI5/uA36lecHbG21S60zmYi2bQGw4BQNETuAHPSMbf21lXs6YA6KOQ+03f3TMgEm5NyeJPORPpVSqzm7G/wCA8IFhqkcVJVBVhqhNv3jYeA4mOZdNJbO1HOOzNwlLKulsz6lienGEtUla2aw4DTyhVuUGU3uep+EFS50tCmSYpGsLnlw98VlUesGPfcCa7cLdsVn/AEmqp7JG+rVvbccz1VfidORgXG5e75ooMTWX66oLU0PsIRxPQkanmBpxJEpN/N4QWOFpt6Cn61wdXfiUPcDa/eLaAWOm3z28aFM5D9bUzIn7iKbO/jfh19H7JnPN3N3XxtTKGKohBqPxIvwVerm3u4noSqCvU1jVz0na13CwOXKaTE83NSpnJ6mzBfhKPav0ZixbC1TfU5KliD3B1At7wfGBzOm9rEnh8pIxaZajjrr8VP8AmMLEYRkZkdSrqSrKeII0IkvaKfWE9wv/AHJb8RCIdE8fcfkflJVNxIlH1vEH5kfECOlgOJA98Ccg7x5iIpobAKSro11YcVZTdGB8LQsJSd7dnTd7/YRm+IFpq9g7jVqjZsV9VTJBKAgu9tLMRogPvPhIN5utjkx+CBrICGBp1F9ksLXI7jcMLcL905TvZsF8HXNMksjelTc+0nQ/vDgfceYnb8DQSki06ahEUWCjgP66yr3n2PTxdLI+jA5qbjijde8HmOfkZVcHMQZN2ts6ph6jUqosy8CPVZTwZTzB/OQSYBwROaCA3eC8TeC8BcAiLxeHps7BKaszNoFUFmPgBqYDimOIZqtlbg13AbEuKSn2BZ6h9w9FfM+E1+zdzsPTsVp5iPbqWdvG3qr7hA5xgsJUf9mjMOoHo/zHSX+B3Yrt61lHmZ0ejs9RwF+8/KS0wg5/17oHPK+6Vd0NNcQiISCwWlctbgGfNewPLQd0aTcXE6/2u4PEFG1NrXIzWnTlwwji0O6Byt/o9rFsxrIT9wrwFuAuIP8Au/xHKpTPiX+STq3ZCGE6CByV9wMb7L0B7318bqYkbhY/m+Hb+Jx/knXOziuzEDkq7i40f8j+Z/nA242N5Cn/ADmdaCQFYHIX3Kx49hD/AOoPmYgbl48/+Wg8XX5GdfPhG3cD1iB4m3/7CY5bg/o8xLspruiJcZgrFntzsAtr2vredFZUo0tMqUqaX4eqiC549wkxG4m3HhcG4A4aeZ98ibVwS16bUqjMFbLcoQGGVgwtcEcVGhBBhXG94sTVxDs6qxJ0AOmRQTlW5sOBv4knnJ26e9AwFFqVdCCzlwyhWvdQPSN+IyzZ4ncmg3rVa5PXOq8O5FAlWm4YV70mPG+Zgp+NrwIOI+kd3sMLSqMb6+iCe7KFJ18RJOF2jtXEDKuGZVYG713amLdyABr+Amy2dgDTUCpUXT3SccbRX2r+GsDmyfR1iKjF6tempYknIjvx6Zsstk+jine9WvVa/EDIgJtl4ZSeBI485r22wg9VD8BKPaO0MQ7Hs6VJxf0c9RkyiwvcBddb84CaG4uDS31Obvd3b4E2+Es8NsKgn7OjTT7qID5gSDTxGI9pl9kAIpA4jmxJPwjxWo3Fj5mBZFFXiQPfEPjEUHUGw4DW/lK9cG3OPJgYEajvCjMUVy5vwRH9E9GawA98sRiSeAMVTwclJhZByH6RQyYrM6ArURSja3GQZGQHuNmt+9MgTO2b8bCGIwrhVu9P6ynbjmUeko+8txbrbpOI5pJMtad9zrniZ7B3hxME6ZmrwrwspgKmUTtj7NqYmqlGkLs54ngqj1nY9BO3bv7t0cImSkt3IGeqwGdj8h0UaDvOsxn0bYjD4dWeqwVnRbu17KczEKT7IKlCDwJvzsJ0XB7Xwz/s8RSf7tRCfIGQPphgNTqeseWj18vzjqkHUa+GsWICVpxwJDBigYBBIeWKEAEBOSDLIuK2th6Zy1ayK3JM4LnwQekfcJAqbxAj6jD4ip35OyUd5NYqbd4UwLnLCtMPtHeTG3yquHonpepiHty9IBUU/e0mQ23tPEi/6WcVVW1z6aU6NiTbMlDMCNDa5HA98Dp+0t5MJQNqtdAw9hSXf+RAW+Eo8fvo4IWhg6rF9UNX6vOBYZkQXdhr0Ex272NrVH7LB4enTI9Z6aZSq8PSqvmZfdr0nRdj7HFPWo2d29ZhfU/vMxLv/EbdwgTNkrWqUkevo7AllS6qupsBqW4W5yeMOicwvXhc/MwzUHC3xsPIRqox5AD3CA3WxVNeAZvBT+JldiNsW9Wnb7x+QlmtO4u0hYmipGsCsfa1QkWsNeQ7j1jb4p24s3n+UffCi48fkY/TwogVy02MfTCMZZpREkKgkFYmA6ySmBHSTAwEBqiAz+ij4j8Y4KIhPW4ePyMQa0B8UxFrTEhmvHUqwJqoI29Tkov8B5xntpyDfP6TKpqNSwDZKamxqgAtUI4lCQQq9DxPG4lHYXfqLfETzxvFhhSxVemOC1XsOilsyjyIl/uR9IdcV0o42p2lOowTO4GamzGytmA1W9gQeF730sa3fpP/ABDE/fT/AOKnAobwQWggWRw3dHMNs5ndURbsxCqO8/KWXYy23VZUxNN39UFhfoWUqD8ZUVG2dkVsOr5rhLInaLezWdAwOuhAXhcXyiUddM2lic3E5bu3qjOoysEQ311/Kdy3m2O2IwzpQPpsUdSpW+ZTe4JIF+fGcpx26WNQ3OGc63uoLMTe5BfK3onpfzkVUbPw16qItlzOiNkIQKHe2ZWBUs1jw8PCaZsOqUzUFfGoMhqACu4sDTaoqE6DMCuU8PWHCZ/sq9J0apScZSCFNwqW+yA2uvURgbUbszTKEDs0pg3JHoBlva3MNAk0dvY0aricTexsnb12Zrc0uSLeMkJvRjwdMTX46+m5yae3dPw6yjputtR7rAt7myaCPI6ZlDWCki5CXyi+pKhBmI10/CBfLvbjueLq5bi5BF7c8oKcbdY9W3jrsXzVKjgC4ztnQryOR2KnrwF5T7I2dXxL5MPSao3MhRkW/wBpiAqjxPnOk7H+jJMlsXULMdclPRUB4qHYXYX7pKs8YjZe92MS/Z1FRBwCUqKLa9vZQQY/e7Fu3Z1cTVVLlvRbI1iBbNksbWF7cNb851XD7hYRfYLfeIP+FRGMZuDgmfOSV0AKg6aaCw/O4lRlsFtGlRw1MUHWpinftKhcNUCoCSO0HHNkBsvIknja9fhq+IrYiolPLUasoRyqKgKKeLIoIC5balhbMToQAd4m7GBQZezZwOROUeShbyfQSnTXLRppTXmEULf7xGp98CNsDY6YWkEU5mPpO/N35nuAubD8zLNXkZqkiYvFECy+s3DuHMwJmJx5ByUxmfmT6qfePM90pNrbaw9H/jcYFa18gYg+6mgLEd9pjt9d8Ww/9mwhtUt9ZU4lLj1V6ub3J5X6nTna7IxFS75Wa5JLMdSTxJJ1JgdnwO9Wz6jBaOLysSAA5qID/OADNGlRjo5v0PWeZ8ThnRstRSp6Ef1edE+jLed8wwVY5lIPYknVSouUv9mwJHS1ucDrLfMfiIouJFNW6+8fiIzVqQJpxIEQ2LkFabNwkylgusACuTHFLGPpRUR4EQIoosT5/KOLhesfz6+fyjGIx9NP2jqviwB8oCxhRA1O0rKm8lAeqS3gLDzMTR22XNlUAd5vAr9+McUw/Yo2V8QSmYcUpgXqv/L6Pi4nL3bQphaAdF0JK+trbU31Jl/vvtE1cQ6IfUVaK9M72ZyD/Eqn7krcDTqJiWpMmVESnkJ4MBWp3cEaHMMx93jAxu1MOB6dMFQTZkPFHHLw0NuljNhvEe1rmrzqJQc+LUKZMq9u4VjSStUQqaiZnQ3BuhFibi4uMwv0AlhSLOqM65TkRcvQIioo8bKJRX/ow6QSz7OCETuzkjAoM1ibcLE8Mw4edyPfDySv24WWixQXJsD4HQnhqNeEDoeGr2AsbTn+3N7cdTxNVKWJdVVyFWyMALDQBlMocPt/EJ6lRrWGlybHmt3BMrsVjWd2dx6TG5N+JtfTTjIreUt7NtKtyC4tm9KihNhxuEAI7wdYBv1j7ntsFRewuc2FqAgdTdjbgeXKYSnjnXRXdeOisRxvm0B/ebzPWS/19X51nPe3pZTZhcEg5Ws76ix9I9YHQd3N7kxVdaNTAYYZgxzhFNsqlvVKd3WbH9Cw3PCYf+6T8pxXdXaqYfELUfgquOIHEW4mdAp784c8m92v4QN1QxQRctNERRwVVCqPcNIo49+tvATFpvthuefwyn8pHr/SEnChh2c+9vwtA3RqO3MmKXDMdSQB3zBbO3rqYl+zWv2NTlTenkzHorg3v3G3deKxuCxoJL5aneXY/iIG8WnSvbtFY9AwPwBiKqoOE4PW2nXDstQlHV9TwYMNAtwNE7uHW83u629BrDsqptUUfzDhcf1z74GtrOBwma3i2v8Ao9CpX9oDKgPNjoo8Lm57gZaVqk599IuJzNQoDh6VRvd6Cf54Gb2PhRdsRXObUsb6kkkn3kkn4yfVTE1gWBVEABsSB6N9D1OvukihhCyooQuEQ13VQSWJ0Rbc9ANO4yLsXaFSq2ILILmkxUa3BFRAFb33104GAziabfsMWDY+q+hKnkysOI6iUeEZsPiUY6NTqqTb91gdO4j8ZtsXSGJfE0QNaTGzcgVuFI8WVlmQ2mmdqLL6zgIwtazqwAv7mHlA76vD3j8RJNLDczKSvtPs10AvoNevWVmJ3gructMm/RF1/OBt8yqOQEgYnbuHT1qq+AOY+S3mRGx8bW1ZWA61Gt8DrJtLcxV1r11Xw/NrQJWJ31or+zR38bKPjc/CVtTe/EvpSpqveAznz4fCWKYTZ1Li3aEfxfh+cKtvXg6WiIo6ZyoPxuYFOFx9fiXI7jYeSSXht0MS2rFV8Tf/AHjeK+kQcEKj7qs3+KwlRid9nf2mPiwUeSwNZR3VRNauIHeFAHxJ+Udx+Nw2Gps6sLIpbQ3JIHxJ4TnmI2/UceiwU9bZj8TMxt/H1iQj1S6EZrWUC4PAhRrbQ++BabMrlyKjjMWqh3A0zEvmYA95098utkYnMmbDK60xUQhK7F1RwVZchvcgXFwTcZh1mU2Hi8oPM6EeIYMPwM2W1FShSpDBBmV3QANqz3BqVncnTVaarlHALaBE2lUz5S6MpOIZWzsWZ2XR2N+C3GgGgEe7OR8S+arTp3zLRVrNqSQbKmYn2suUHvUycsqGMkElZYJRJyyds3ZJr5xpYLrc6EkHKNNeIkTs4tVI5/gR5c4GJx27OJpaVKLqF01Q5bXvo6gq3nKp8I97gdAQCOVx4kd06imNqpfJUdelmIA/h4SE+0cUdKjYet/1KC3Pv1kxXOjh2A1U/LgOR48Od+USU8efK9rjgLHQeNxNW+9OGzFK+ApKymxCGrTIP8BtHl2vsx/Wo1E+5WUjycEyDHtTN7fI8x1tZfdw6cIVEczblrodR38D8DNslPZb8KlZPvU0cea2jg2NgG4Y5B3PSdT5q5gYgLr58B8+I/rvkqtgWslaoFNI/ZNu6xI1B+c2lPdDDP6mMoN0u1RZZYP6O0a+TEJrxyVKhv3lcwvA54Xd0zDVVb6tmYZrdA2l/wDedE3N3rNS2GxJ+sAORzxcAXKt++ACe8A9NbfZ/wBH+DosHqViWHQ28ixZl8QRLug2AoXNNUDHi4Bdz95zdj7zAxu+e67Vx29BD2iizAD107v3hy6znZarScNlZHQ3GYHyb8uhIncq+9FIaU0d/DKB5k6SurbfrP6q0KY6u+c+4LAhYSq7U0eohQuiuFbjYjmOPnOcb4182OfX1ERfgX/zTobvSZy+Ixhdjyp028gSCPhOZbxhDiar0mZ0LgKWtc2RLjTjbh7oF1gqY7NnTFLhnDgKXsQ4VL5TqLC7c7yY2IsjdqENRsrGrh8oNRQy2zPyvltb4SmbZj16dNaKNVfMrKqLcnOCpNr20Kak6Aam0vK1FcNQNN1ANIUzVKnN9a73AHI2QWNtLC/AyiTUxyM9kanRUlvqERRXquD69RlNspNyDzB1PIZDAYYNjlVtFTEO7HkqoSSefNRNQiU2rPXeyvTWxI9WrSYB6VQE8SEGU/7Tnu2KzFuJBYszAEi+Y8+uuaQdTxW8+z6Z9L6xh9o6fy//AFldiPpRRBloUgB+6tvxyj4TlQQxQpmBtMb9JGKe+XTp6VvMKB+MosRvRiX4vbwAPxa8q1w5jq4UwDqbQqv69R27ixt5cI2tQyUmBPSSKezT0gQRUaLV3lpT2Yekl09l90CiFVxyPlG8TULCzBtOGhmspbL7pKTZkuDBYbEFDNJsveGooyoXJPBV5X591+ZFpfps/uj9PCAcowQNnUGUFn9djduncB4S1pDrDSjHgkIKCLywSiVmtEu8EQywGXqWkKtibSZVSQqtKBQbaAqcaalhwYkggdLi1x4zNvhHHL4zbVMNeRKmD7pBkUpsDcrfuuR8RJq7RcC2RQO4mW77P7oy+zT0jFVv6xb7I+H5R2htmohumhHS4/wkSQ2zj0iG2cekgnjfbE/aHjZb+bKZHffLHXNq5GvDJS07vUkVtmt0jbbObpAlNvfjjxrn+Sl/oiDvVjDxqg/wJ8lkY7PfpC/Vz/YMBf6/xJPpVDY3uAFAsfAXjT4q4t/WnX3W8oo7PqfYY+UafZtY8KT+QgaLdbbzUXUg2sGXiBdW9Zb8r6a9QJpNs4ZMSqIKqInaNUqkfVu11KqTmBOb1fWHCwGigTndPZuJB/ZP5S+wOJ2gihEVgo0Fyot4Em490C02wRSpIhylgMiMLhnQNdVt9gHmemml5lHwbOxYzSYXY9RiXrtmc95IHvPGWdPZg6S4MdT2Wekk09knpNnT2cOkdXBAcoRkqeyO6S02R3TULhh0iuyHSBnaey+6Sk2aBLkKIABKK1cCOkcXCjpJ5iGIgRloRxacUzQg8AykQVi88bd4AywiIntOsQakBdoIjtIIE0LBl1jYeLzdZQbUxENQEcWOKekgjfoYiTghJ4EPKOcCsOBHSIbADpLYgRtgDwgUzYAdIS7OHSXCpzhlYFKdnd0R+rx0l4UiSggUg2d3R5NnjpLQU4tacCvTADp+EfTBjpJmWKBgMDCjpD/Rx0j8SxgI7LTp4W89YpVA/ryhsYgmAvSE0K8bYwF5vGIz9f8AeNkws3fAUXiWaNse/rE3gO9pEs8bJiSesBTGJJhFohmgOB4GjJaAvAJyY3n6xTNGHMBzPBGc3h5wQLYLHQv4wQSh6nYeMXeCCAea35954aQFoIIB/wBGGpEEEgF7wNz6CCCAm/vhQQQAouPyuItbCCCAkt/XjAWEEEAM8QWgggEXiA/GHBAGeILwoIDZeIL+f9CFBALPE54IICS5iS8KCAktEl4IICC/KEzwQQCNSNM8EEBrPBBBA//Z" />
            <Card title="NOVO CARD" image="url_da_imagem_4" />
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: '#fffeff',
    fontSize: 36,
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardContainer: {
    flex: 1,
    alignItems: 'center', // Centraliza os cards horizontalmente
    justifyContent: 'center', // Centraliza os cards verticalmente
    paddingTop: 200, // Reduz o espaço no topo do container dos cards para 285
    paddingLeft: 35,
  },
  card: {
    width: '90%', // Aumenta a largura do card para 90%
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 45,   
    padding: 10,
    alignItems: 'center', // Centraliza os itens horizontalmente
    justifyContent: 'center', // Centraliza os itens verticalmente
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});