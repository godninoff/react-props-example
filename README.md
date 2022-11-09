# Пример использования react props

## Для чего нужен Props?

По замыслу приложения React должны быть составными. То есть состояить из частей компонентов. Это нужно, чтобы в коде было легче ориентироваться и работать при отладке.  
При разбивке приложения на компоненты у нас так же появляется потребность в том, чтобы каждый компонент имел возможность получать состояние из родительского компонента. Для этого существует Props. С его помощью мы передаем состояние между компонентами.

Сначала необходимо, из родительского компонента , передать наш стейт в дочерний:  
![alt text](/public/images/props1.jpg)

затем в самом компоненте получить его при помощи ключего слова пропс и использовать:
![alt text](/public/images/props2.jpg)

или получить при помощи фигурных скобок (ключевое слово props при таком методе передачи в компонентах не исользуется):
![alt text](/public/images/props3.jpg)

## Часто возникающие ошибки:

При вложенности более одного компонента, можно пропустить передачу значений. Для этого можно использовать React Components - приложение для отладки и проверять в нем наличие на всех компонентах передаваемого значения. Так же передача с большой вложенностью это не самое лучшее решение, потому что могут существовать компоненты, для которых передаваемые значения не требуются. В этом случае лучше использовать HOC useContext.

Синтаксические ошибки. Передача состояние производится через фигурные скобки. Название должно описывать действие или скопировано с названия стейта.
