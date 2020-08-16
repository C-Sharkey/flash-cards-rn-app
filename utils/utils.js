// To manage your AsyncStorage database, you'll want to create four different helper methods.

    // getDecks: return all of the decks along with their titles, questions, and answers.
    // getDeck: take in a single id argument and return the deck associated with that id.
    // saveDeckTitle: take in a single title argument and add it to the decks.
    // addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.



    import * as Notifications from 'expo-notifications';
    import * as Permissions from 'expo-permissions';
    import { AsyncStorage } from 'react-native'
 
    const NOTIFICATION_KEY = 'Flashcards:notification'


    export function clearLocalNotification () {
        return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
    }

    function createNotification () {
        return {
            title: 'Time to study',
            body: 'Dont forget to study today... ',
            ios: {
                sound: true,
            },
            android: {
                sound: true,
                priority: 'high',
                sticky: false,
                vibrate: true,
            }
        }
    }

    export function setLocalNotification () {
        AsyncStorage.getItem(NOTIFICATION_KEY)
            .then(JSON.parse)
            .then((data) => {
                if (data === null) {
                    Permissions.askAsync(Permissions.NOTIFICATIONS)
                        .then(({ status }) => {
                            if (status === 'granted') {
                                Notifications.cancelAllScheduledNotificationsAsync()
    
                                let tomorrow = new Date()
                                tomorrow.setDate(tomorrow.getDate() + 1)
                                tomorrow.setHours(20)
                                tomorrow.setMinutes(0)

                                Notifications.scheduleLocalNotificationAsync(
                                    createNotification(),
                                    {
                                        time: tomorrow,
                                        repeat: 'day',
                                    }
                                )
                                
                                AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                            }
                    })
            }
        })
    }