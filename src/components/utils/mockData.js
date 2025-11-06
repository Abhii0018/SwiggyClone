export const rollsRes=[
    
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
                "collectionId": "83669",
                "title": "Rolls",
                "description": "Crunchy & crispy rolls that are perfect for all your moods. ",
                "imageId": "COLLECTIONS/IMAGES/MERCH/2024/7/17/2259e432-fed2-4cc3-b0e9-faaac21b48d4_Rolls (2).png",
                "aspectRatio": "3.44",
                "cta": {
                    "link": "swiggy://collectionV2?collection_id=83669&tags=layout_CCS_Rolls,roll,ads_pc_rolls",
                    "type": "collectionv2"
                },
                "type": "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
                "count": "21 restaurants",
                "navBarConfig": {}
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
                "sortConfigs": [
                    {
                        "key": "relevance",
                        "title": "Relevance (Default)",
                        "selected": true,
                        "defaultSelection": true
                    },
                    {
                        "key": "deliveryTimeAsc",
                        "title": "Delivery Time"
                    },
                    {
                        "key": "modelBasedRatingDesc",
                        "title": "Rating"
                    },
                    {
                        "key": "costForTwoAsc",
                        "title": "Cost: Low to High"
                    },
                    {
                        "key": "costForTwoDesc",
                        "title": "Cost: High to Low"
                    }
                ],
                "restaurantCount": 21,
                "facetList": [
                    {
                        "label": "10 Mins Delivery",
                        "id": "isRestaurantBolt",
                        "selection": "SELECT_TYPE_SINGLESELECT",
                        "facetInfo": [
                            {
                                "label": "10 Mins Delivery",
                                "id": "isRestaurantBoltfacetquery0",
                                "analytics": {},
                                "openFilter": true
                            }
                        ],
                        "viewType": "VIEW_TYPE_FLATTENED",
                        "subLabel": "Filterby",
                        "icon": "COLLECTIONS/IMAGES/MERCH/2024/12/18/4b2e8903-0e25-401b-8ede-088491b4cfa0_937977a3-b03b-4a9e-8b6a-24937664d1a9_pic.png"
                    },
                    {
                        "label": "Veg/Non-Veg",
                        "id": "isVeg",
                        "selection": "SELECT_TYPE_MULTISELECT",
                        "facetInfo": [
                            {
                                "label": "Non Veg",
                                "id": "isVegfacetquery0",
                                "analytics": {},
                                "openFilter": true
                            },
                            {
                                "label": "Pure Veg",
                                "id": "isVegfacetquery1",
                                "analytics": {},
                                "openFilter": true
                            }
                        ],
                        "viewType": "VIEW_TYPE_HALF_CARD",
                        "subLabel": "Filterby",
                        "openFilter": true
                    },
                    {
                        "label": "Ratings",
                        "id": "rating",
                        "selection": "SELECT_TYPE_MULTISELECT",
                        "facetInfo": [
                            {
                                "label": "Ratings",
                                "id": "ratingfacetquery0",
                                "analytics": {},
                                "openFilter": true
                            },
                            {
                                "label": "Ratings 4.0+",
                                "id": "ratingfacetquery1",
                                "analytics": {},
                                "openFilter": true
                            },
                            {
                                "label": "Ratings 4.5+",
                                "id": "ratingfacetquery2",
                                "analytics": {},
                                "openFilter": true
                            }
                        ],
                        "viewType": "VIEW_TYPE_HALF_CARD",
                        "subLabel": "Filterby",
                        "openFilter": true
                    },
                    {
                        "label": "Delivery Time",
                        "id": "deliveryTime",
                        "selection": "SELECT_TYPE_MULTISELECT",
                        "facetInfo": [
                            {
                                "label": "Less than 30 mins",
                                "id": "deliveryTimefacetquery0",
                                "analytics": {},
                                "openFilter": true
                            },
                            {
                                "label": "Less than 45 mins",
                                "id": "deliveryTimefacetquery1",
                                "analytics": {},
                                "openFilter": true
                            }
                        ],
                        "viewType": "VIEW_TYPE_HALF_CARD",
                        "subLabel": "Filterby",
                        "openFilter": true
                    },
                    {
                        "label": "Cost For Two",
                        "id": "costForTwo",
                        "selection": "SELECT_TYPE_MULTISELECT",
                        "facetInfo": [
                            {
                                "label": "Less than Rs. 300",
                                "id": "costForTwofacetquery0",
                                "analytics": {},
                                "openFilter": true
                            },
                            {
                                "label": "Rs.300 - Rs.600",
                                "id": "costForTwofacetquery1",
                                "analytics": {},
                                "openFilter": true
                            },
                            {
                                "label": "Greater than Rs. 600",
                                "id": "costForTwofacetquery2",
                                "analytics": {},
                                "openFilter": true
                            }
                        ],
                        "viewType": "VIEW_TYPE_HALF_CARD",
                        "subLabel": "Filterby",
                        "openFilter": true
                    }
                ],
                "widgetId": "inlineFacetFilter"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
                "layout": {
                    "rows": 1,
                    "widgetPadding": {
                        "left": 16,
                        "right": 16
                    },
                    "widgetTheme": {
                        "defaultMode": {
                            "backgroundColour": "#FFFFFF",
                            "theme": "THEME_TYPE_LIGHT"
                        },
                        "darkMode": {
                            "backgroundColour": "#1B3028",
                            "theme": "THEME_TYPE_DARK"
                        }
                    }
                },
                "id": "restaurantCountWidget",
                "gridElements": {
                    "infoWithStyle": {
                        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
                        "text": "Restaurants to explore",
                        "headerStyling": {
                            "textSize": 15,
                            "textColor": "text_color_highest_emphasis",
                            "textFontName": "FONT_NAME_HEADER_H5",
                            "maxLines": 1
                        }
                    }
                }
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "535219",
                    "name": "Taco Bell",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/10/d1e40e64-0112-4083-9dc6-3dc6d8af4911_535219.JPG",
                    "locality": "Civil Lines",
                    "areaName": "Civil Lines",
                    "costForTwo": "₹300 for two",
                    "cuisines": [
                        "Mexican",
                        "Fast Food",
                        "Snacks"
                    ],
                    "avgRating": 4.4,
                    "parentId": "1557",
                    "avgRatingString": "4.4",
                    "totalRatingsString": "1.1K+",
                    "promoted": true,
                    "adTrackingId": "cid=33614323~p=0~adgrpid=33614323#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=535219~plpr=COLLECTION~eid=af760c77-24fb-4ac3-9850-c9688f83be8e~srvts=1760938610920~collid=83669",
                    "sla": {
                        "deliveryTime": 44,
                        "lastMileTravel": 1.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-50 mins",
                        "lastMileTravelString": "1.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-10-20 23:00:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "android/static-assets/icons/big_rx.png",
                                "description": "bolt!"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "android/static-assets/icons/big_rx.png",
                                            "description": "bolt!"
                                        }
                                    }
                                ]
                            },
                            "textExtendedBadges": {},
                            "textBased": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹49",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "3.3",
                            "ratingCount": "113"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    "campaignId": "33614323"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=535219&source=collection&query=Roll",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "747003",
                    "name": "Rominus Pizza And Burger",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/11/76c2d698-23f4-44a5-b59e-0550bb880278_747003.jpg",
                    "locality": "Kanpur Nagar",
                    "areaName": "Mega Mall, Mall Road",
                    "costForTwo": "₹500 for two",
                    "cuisines": [
                        "Pizzas",
                        "Italian-American",
                        "American",
                        "Barbecue",
                        "Snacks",
                        "Grill",
                        "Italian",
                        "Pastas",
                        "Sweets",
                        "Desserts"
                    ],
                    "avgRating": 4.4,
                    "parentId": "8387",
                    "avgRatingString": "4.4",
                    "totalRatingsString": "4.8K+",
                    "sla": {
                        "deliveryTime": 35,
                        "lastMileTravel": 2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-40 mins",
                        "lastMileTravelString": "2.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-10-21 04:00:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "Rxawards/_CATEGORY-Pizza.png",
                                "description": "Delivery!"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "description": "Delivery!",
                                            "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                        }
                                    }
                                ]
                            },
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "70% OFF",
                        "subHeader": "UPTO ₹150",
                        "discountTag": "SAVE BIG",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=747003&source=collection&query=Roll",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "919476",
                    "name": "Wendy's Burgers",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/a582c188-da10-4754-8a7d-44537ba54799_919476.jpg",
                    "locality": "Permat",
                    "areaName": "Harsh Nagar",
                    "costForTwo": "₹750 for two",
                    "cuisines": [
                        "Burgers",
                        "American",
                        "Fast Food",
                        "Snacks"
                    ],
                    "avgRating": 4.3,
                    "parentId": "972",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "890",
                    "promoted": true,
                    "adTrackingId": "cid=34069867~p=2~adgrpid=34069867#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=919476~plpr=COLLECTION~eid=6d456f31-4ef2-49a2-b1b2-5392308489ad~srvts=1760938610920~collid=83669",
                    "sla": {
                        "deliveryTime": 41,
                        "lastMileTravel": 3.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-50 mins",
                        "lastMileTravelString": "3.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-10-20 23:59:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹59",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    "campaignId": "34069867"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=919476&source=collection&query=Roll",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "161455",
                    "name": "Burger King",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/eba1dad8-dd12-475e-85d8-e87668aff690_161455.jpg",
                    "locality": "Z Square Mall",
                    "areaName": "Downtown",
                    "costForTwo": "₹350 for two",
                    "cuisines": [
                        "Burgers",
                        "American"
                    ],
                    "avgRating": 4.4,
                    "parentId": "166",
                    "avgRatingString": "4.4",
                    "totalRatingsString": "13K+",
                    "sla": {
                        "deliveryTime": 51,
                        "lastMileTravel": 1.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "50-60 mins",
                        "lastMileTravelString": "1.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-10-20 23:00:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "android/static-assets/icons/big_rx.png",
                                "description": "bolt!"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "android/static-assets/icons/big_rx.png",
                                            "description": "bolt!"
                                        }
                                    }
                                ]
                            },
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹55",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=161455&source=collection&query=Roll",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "361081",
                    "name": "Faasos - Wraps, Rolls & Shawarma",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/57a17574-79ad-4ac7-a459-79f1733d42e8_361081.JPG",
                    "locality": "Permat",
                    "areaName": "Harsh Nagar",
                    "costForTwo": "₹200 for two",
                    "cuisines": [
                        "Kebabs",
                        "Fast Food",
                        "Snacks",
                        "American",
                        "Healthy Food",
                        "Desserts",
                        "Beverages"
                    ],
                    "avgRating": 4.5,
                    "parentId": "21809",
                    "avgRatingString": "4.5",
                    "totalRatingsString": "10K+",
                    "promoted": true,
                    "adTrackingId": "cid=34069884~p=3~adgrpid=34069884#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=361081~plpr=COLLECTION~eid=1e06288b-ba26-40ba-89aa-0a7da576c9b5~srvts=1760938610920~collid=83669",
                    "sla": {
                        "deliveryTime": 42,
                        "lastMileTravel": 3.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-50 mins",
                        "lastMileTravelString": "3.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-10-20 23:59:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "Rxawards/_CATEGORY-Rolls.png",
                                "description": "Delivery!"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "Rxawards/_CATEGORY-Rolls.png",
                                            "description": "Delivery!"
                                        }
                                    }
                                ]
                            },
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹89",
                        "logoCtx": {
                            "text": "BENEFITS"
                        },
                        "footerText": "2 DEALS LEFT",
                        "secondaryHeaderType": "SECONDARY_HEADER_TYPE_USAGE_LIMIT_OFFER"
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    "campaignId": "34069884"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=361081&source=collection&query=Roll",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "75044",
                    "name": "KFC",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/17/3f370e03-356d-4d08-8db9-02a5e4b144d3_75044.JPG",
                    "locality": "Chaman Ganj",
                    "areaName": "Mall Road",
                    "costForTwo": "₹400 for two",
                    "cuisines": [
                        "Burgers",
                        "Fast Food",
                        "Rolls & Wraps"
                    ],
                    "avgRating": 4.5,
                    "parentId": "547",
                    "avgRatingString": "4.5",
                    "totalRatingsString": "3.3K+",
                    "sla": {
                        "deliveryTime": 44,
                        "lastMileTravel": 1.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-50 mins",
                        "lastMileTravelString": "1.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-10-20 23:00:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "Rxawards/_CATEGORY-Burger.png",
                                "description": "Delivery!"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                                            "description": "Delivery!"
                                        }
                                    }
                                ]
                            },
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹80",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "4.3",
                            "ratingCount": "2.7K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=75044&source=collection&query=Roll",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "913948",
                    "name": "Theobroma",
                    "cloudinaryImageId": "fcb6d43c223135ff52b8dde41c650423",
                    "locality": "Swaroop Nagar",
                    "areaName": "Swaroop Nagar",
                    "costForTwo": "₹300 for two",
                    "cuisines": [
                        "Bakery",
                        "Desserts",
                        "Beverages"
                    ],
                    "avgRating": 4.6,
                    "parentId": "1040",
                    "avgRatingString": "4.6",
                    "totalRatingsString": "754",
                    "promoted": true,
                    "adTrackingId": "cid=34087765~p=5~adgrpid=34087765#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=913948~plpr=COLLECTION~eid=6337baa1-abbe-48d6-908b-739782e6a5c6~srvts=1760938610920~collid=83669",
                    "sla": {
                        "deliveryTime": 27,
                        "lastMileTravel": 4.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "4.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-10-21 02:00:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "newg.png",
                                "description": "Gourmet"
                            }
                        ]
                    },
                    "isOpen": true,
                    "aggregatedDiscountInfoV2": {},
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textExtendedBadges": {},
                            "textBased": {},
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "newg.png",
                                            "description": "Gourmet"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "4.2",
                            "ratingCount": "110"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    "campaignId": "34087765"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=913948&source=collection&query=Roll",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "253770",
                    "name": "McDonald's",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/bf70551e-272a-4664-9397-9ca9f47f0fc5_253770.JPG",
                    "locality": "Downtown",
                    "areaName": "Mall Road",
                    "costForTwo": "₹400 for two",
                    "cuisines": [
                        "American"
                    ],
                    "avgRating": 4.3,
                    "parentId": "630",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "7.3K+",
                    "sla": {
                        "deliveryTime": 48,
                        "lastMileTravel": 1.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-55 mins",
                        "lastMileTravelString": "1.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-10-20 23:00:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "android/static-assets/icons/big_rx.png",
                                "description": "bolt!"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textExtendedBadges": {},
                            "textBased": {},
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "android/static-assets/icons/big_rx.png",
                                            "description": "bolt!"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹99",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "4.0",
                            "ratingCount": "801"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=253770&source=collection&query=Roll",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "241296",
                    "name": "Biryani By Kilo",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/4/11ca9f8c-cdc5-4d25-80e5-87375404815b_241296.JPG",
                    "locality": "Swaroop Nagar",
                    "areaName": "Fazalganj",
                    "costForTwo": "₹499 for two",
                    "cuisines": [
                        "Biryani",
                        "Hyderabadi",
                        "North Indian",
                        "Kebabs",
                        "Mughlai",
                        "Desserts"
                    ],
                    "avgRating": 4.3,
                    "parentId": "130",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "8.5K+",
                    "promoted": true,
                    "adTrackingId": "cid=33442527~p=6~adgrpid=33442527#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=241296~plpr=COLLECTION~eid=3914a961-b937-4ba1-ae83-ff36677d0cdf~srvts=1760938610920~collid=83669",
                    "sla": {
                        "deliveryTime": 45,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-55 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-10-21 01:00:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "Rxawards/_CATEGORY-Biryani.png",
                                "description": "Delivery!"
                            },
                            {
                                "imageId": "newg.png",
                                "description": "Gourmet"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "Rxawards/_CATEGORY-Biryani.png",
                                            "description": "Delivery!"
                                        }
                                    },
                                    {
                                        "attributes": {
                                            "imageId": "newg.png",
                                            "description": "Gourmet"
                                        }
                                    }
                                ]
                            },
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹89",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "3.9",
                            "ratingCount": "676"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    "campaignId": "33442527"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=241296&source=collection&query=Roll",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    }

]

export const cakeRes=[
    
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
                "collectionId": "83655",
                "title": "Cakes",
                "description": "Feast on amazing cakes to satisfy your sweet tooth.",
                "imageId": "COLLECTIONS/IMAGES/MERCH/2024/7/3/8c1232a7-c8f6-4dd4-95f8-89fe93233515_pic",
                "aspectRatio": "3.44",
                "cta": {
                    "link": "swiggy://collectionV2?collection_id=83655&tags=layout_CCS_Cake,cakes",
                    "type": "collectionv2"
                },
                "type": "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
                "count": "18 restaurants",
                "navBarConfig": {}
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
                "sortConfigs": [
                    {
                        "key": "relevance",
                        "title": "Relevance (Default)",
                        "selected": true,
                        "defaultSelection": true
                    },
                    {
                        "key": "deliveryTimeAsc",
                        "title": "Delivery Time"
                    },
                    {
                        "key": "modelBasedRatingDesc",
                        "title": "Rating"
                    },
                    {
                        "key": "costForTwoAsc",
                        "title": "Cost: Low to High"
                    },
                    {
                        "key": "costForTwoDesc",
                        "title": "Cost: High to Low"
                    }
                ],
                "restaurantCount": 18,
                "facetList": [
                    {
                        "label": "Veg/Non-Veg",
                        "id": "isVeg",
                        "selection": "SELECT_TYPE_MULTISELECT",
                        "facetInfo": [
                            {
                                "label": "Non Veg",
                                "id": "isVegfacetquery0",
                                "analytics": {},
                                "openFilter": true
                            },
                            {
                                "label": "Pure Veg",
                                "id": "isVegfacetquery1",
                                "analytics": {},
                                "openFilter": true
                            }
                        ],
                        "viewType": "VIEW_TYPE_HALF_CARD",
                        "subLabel": "Filterby",
                        "openFilter": true
                    },
                    {
                        "label": "Ratings",
                        "id": "rating",
                        "selection": "SELECT_TYPE_MULTISELECT",
                        "facetInfo": [
                            {
                                "label": "Ratings",
                                "id": "ratingfacetquery0",
                                "analytics": {},
                                "openFilter": true
                            },
                            {
                                "label": "Ratings 4.0+",
                                "id": "ratingfacetquery1",
                                "analytics": {},
                                "openFilter": true
                            },
                            {
                                "label": "Ratings 4.5+",
                                "id": "ratingfacetquery2",
                                "analytics": {},
                                "openFilter": true
                            }
                        ],
                        "viewType": "VIEW_TYPE_HALF_CARD",
                        "subLabel": "Filterby",
                        "openFilter": true
                    },
                    {
                        "label": "Delivery Time",
                        "id": "deliveryTime",
                        "selection": "SELECT_TYPE_MULTISELECT",
                        "facetInfo": [
                            {
                                "label": "Less than 30 mins",
                                "id": "deliveryTimefacetquery0",
                                "analytics": {},
                                "openFilter": true
                            },
                            {
                                "label": "Less than 45 mins",
                                "id": "deliveryTimefacetquery1",
                                "analytics": {},
                                "openFilter": true
                            }
                        ],
                        "viewType": "VIEW_TYPE_HALF_CARD",
                        "subLabel": "Filterby",
                        "openFilter": true
                    },
                    {
                        "label": "Cost For Two",
                        "id": "costForTwo",
                        "selection": "SELECT_TYPE_MULTISELECT",
                        "facetInfo": [
                            {
                                "label": "Less than Rs. 300",
                                "id": "costForTwofacetquery0",
                                "analytics": {},
                                "openFilter": true
                            },
                            {
                                "label": "Rs.300 - Rs.600",
                                "id": "costForTwofacetquery1",
                                "analytics": {},
                                "openFilter": true
                            }
                        ],
                        "viewType": "VIEW_TYPE_HALF_CARD",
                        "subLabel": "Filterby",
                        "openFilter": true
                    }
                ],
                "widgetId": "inlineFacetFilter"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
                "layout": {
                    "rows": 1,
                    "widgetPadding": {
                        "left": 16,
                        "right": 16
                    },
                    "widgetTheme": {
                        "defaultMode": {
                            "backgroundColour": "#FFFFFF",
                            "theme": "THEME_TYPE_LIGHT"
                        },
                        "darkMode": {
                            "backgroundColour": "#1B3028",
                            "theme": "THEME_TYPE_DARK"
                        }
                    }
                },
                "id": "restaurantCountWidget",
                "gridElements": {
                    "infoWithStyle": {
                        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
                        "text": "Restaurants to explore",
                        "headerStyling": {
                            "textSize": 15,
                            "textColor": "text_color_highest_emphasis",
                            "textFontName": "FONT_NAME_HEADER_H5",
                            "maxLines": 1
                        }
                    }
                }
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "674923",
                    "name": "Bikanervala",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/20/6727c131-dfba-4e7d-9a1f-93507fd0d496_674923.jpg",
                    "locality": "Kidwai Nagar",
                    "areaName": "Chawla Market",
                    "costForTwo": "₹400 for two",
                    "cuisines": [
                        "Sweets",
                        "North Indian",
                        "South Indian",
                        "Continental",
                        "Beverages"
                    ],
                    "avgRating": 4.4,
                    "veg": true,
                    "parentId": "45936",
                    "avgRatingString": "4.4",
                    "totalRatingsString": "3.0K+",
                    "promoted": true,
                    "adTrackingId": "cid=33413707~p=0~adgrpid=33413707#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=674923~plpr=COLLECTION~eid=cb165f3b-0c03-4cb1-b2b0-17960fbd0645~srvts=1760927690831~collid=83655",
                    "sla": {
                        "deliveryTime": 41,
                        "lastMileTravel": 4.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-50 mins",
                        "lastMileTravelString": "4.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-10-21 05:00:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "Rxawards/_CATEGORY-Snacks.png",
                                "description": "Delivery!"
                            }
                        ]
                    },
                    "isOpen": true,
                    "aggregatedDiscountInfoV2": {},
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "Rxawards/_CATEGORY-Snacks.png",
                                            "description": "Delivery!"
                                        }
                                    }
                                ]
                            },
                            "textExtendedBadges": {}
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "3.8",
                            "ratingCount": "2.7K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    "campaignId": "33413707"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=674923&source=collection&query=Cakes",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "810395",
                    "name": "Mr. Brown",
                    "cloudinaryImageId": "195be0bdbf32c795b8c3d76b9f3c141c",
                    "locality": "Civil Lines",
                    "areaName": "Civil Lines",
                    "costForTwo": "₹300 for two",
                    "cuisines": [
                        "Beverages",
                        "Fast Food",
                        "Pizzas",
                        "Kebabs",
                        "Burgers"
                    ],
                    "avgRating": 4.6,
                    "parentId": "2262",
                    "avgRatingString": "4.6",
                    "totalRatingsString": "1.4K+",
                    "sla": {
                        "deliveryTime": 27,
                        "lastMileTravel": 2.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "2.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-10-20 22:30:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "Rxawards/_CATEGORY-Desserts.png",
                                "description": "Delivery!"
                            }
                        ]
                    },
                    "isOpen": true,
                    "aggregatedDiscountInfoV2": {},
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textExtendedBadges": {},
                            "textBased": {},
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "Rxawards/_CATEGORY-Desserts.png",
                                            "description": "Delivery!"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "4.2",
                            "ratingCount": "6.8K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=810395&source=collection&query=Cakes",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "913948",
                    "name": "Theobroma",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/16/83ebdda5-47cd-4c1b-a24d-89591a324324_913948.JPG",
                    "locality": "Swaroop Nagar",
                    "areaName": "Swaroop Nagar",
                    "costForTwo": "₹300 for two",
                    "cuisines": [
                        "Bakery",
                        "Desserts",
                        "Beverages"
                    ],
                    "avgRating": 4.6,
                    "parentId": "1040",
                    "avgRatingString": "4.6",
                    "totalRatingsString": "754",
                    "promoted": true,
                    "adTrackingId": "cid=34087765~p=2~adgrpid=34087765#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=913948~plpr=COLLECTION~eid=16d9b348-e0a4-4fed-b39e-e6f51133dbb7~srvts=1760927690831~collid=83655",
                    "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 4.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "4.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-10-21 02:00:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "newg.png",
                                "description": "Gourmet"
                            }
                        ]
                    },
                    "isOpen": true,
                    "aggregatedDiscountInfoV2": {},
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "newg.png",
                                            "description": "Gourmet"
                                        }
                                    }
                                ]
                            },
                            "textExtendedBadges": {}
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "4.2",
                            "ratingCount": "110"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    "campaignId": "34087765"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=913948&source=collection&query=Cakes",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "501969",
                    "name": "The Cake Club",
                    "cloudinaryImageId": "q2fgvnxrfi9ogcsixhuw",
                    "locality": "Chhauki",
                    "areaName": "Swaroop Nagar",
                    "costForTwo": "₹300 for two",
                    "cuisines": [
                        "Bakery"
                    ],
                    "avgRating": 3.5,
                    "veg": true,
                    "parentId": "206233",
                    "avgRatingString": "3.5",
                    "totalRatingsString": "65",
                    "sla": {
                        "deliveryTime": 37,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-10-20 23:59:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "v1695133679/badges/Pure_Veg111.png",
                                "description": "pureveg"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                                            "description": "pureveg"
                                        }
                                    }
                                ]
                            },
                            "textExtendedBadges": {},
                            "textBased": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "10% OFF",
                        "subHeader": "UPTO ₹40",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=501969&source=collection&query=Cakes",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "485846",
                    "name": "Shri -Jai Bakery's Cakes and Fast Food",
                    "cloudinaryImageId": "qrucqygunwvmrdepnbwj",
                    "locality": "Saket Nagar",
                    "areaName": "Juhi Kalan",
                    "costForTwo": "₹150 for two",
                    "cuisines": [
                        "Bakery",
                        "Cakes"
                    ],
                    "avgRating": 4.5,
                    "veg": true,
                    "parentId": "291610",
                    "avgRatingString": "4.5",
                    "totalRatingsString": "138",
                    "promoted": true,
                    "adTrackingId": "cid=7916e99f-6c3b-43bb-aa25-e2d893a2a438~p=3~adgrpid=7916e99f-6c3b-43bb-aa25-e2d893a2a438#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=485846~plpr=COLLECTION~eid=a5ef7539-0416-4f7b-824d-548e80758c7f~srvts=1760927690831~collid=83655",
                    "sla": {
                        "deliveryTime": 40,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-10-20 12:00:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "v1695133679/badges/Pure_Veg111.png",
                                "description": "pureveg"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                                            "description": "pureveg"
                                        }
                                    }
                                ]
                            },
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹69",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    "campaignId": "7916e99f-6c3b-43bb-aa25-e2d893a2a438"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=485846&source=collection&query=Cakes",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "95482",
                    "name": "Shanti Niketan Sweets",
                    "cloudinaryImageId": "ho3dyqu8y8r0lhvuzqdg",
                    "locality": "Babu Purva Colony",
                    "areaName": "Kidwai Nagar Market",
                    "costForTwo": "₹250 for two",
                    "cuisines": [
                        "Sweets",
                        "South Indian",
                        "Beverages"
                    ],
                    "avgRating": 4.4,
                    "veg": true,
                    "parentId": "7039",
                    "avgRatingString": "4.4",
                    "totalRatingsString": "7.0K+",
                    "sla": {
                        "deliveryTime": 28,
                        "lastMileTravel": 4.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "4.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-10-20 23:10:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "v1695133679/badges/Pure_Veg111.png",
                                "description": "pureveg"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                                            "description": "pureveg"
                                        }
                                    }
                                ]
                            },
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹99",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=95482&source=collection&query=Cakes",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "772884",
                    "name": "Kanpuriya Cake Wala",
                    "cloudinaryImageId": "883525b1f4ccd1ce53bf6f7f0fb0619d",
                    "locality": "Zone-21",
                    "areaName": "Shastri Nagar-82",
                    "costForTwo": "₹200 for two",
                    "cuisines": [
                        "Bakery"
                    ],
                    "avgRating": 3.8,
                    "veg": true,
                    "parentId": "461043",
                    "avgRatingString": "3.8",
                    "totalRatingsString": "43",
                    "promoted": true,
                    "adTrackingId": "cid=9c865649-802d-4914-af09-14a9e5bf6c29~p=5~adgrpid=9c865649-802d-4914-af09-14a9e5bf6c29#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=772884~plpr=COLLECTION~eid=de9dcedc-c7f9-43b2-adbf-18a1ac4844b9~srvts=1760927690831~collid=83655",
                    "sla": {
                        "deliveryTime": 46,
                        "lastMileTravel": 6.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-50 mins",
                        "lastMileTravelString": "6.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-10-20 23:59:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "v1695133679/badges/Pure_Veg111.png",
                                "description": "pureveg"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                                            "description": "pureveg"
                                        }
                                    }
                                ]
                            },
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "â‚¹125 OFF",
                        "subHeader": "ABOVE â‚¹199",
                        "discountTag": "FLAT DEAL",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                    "campaignId": "9c865649-802d-4914-af09-14a9e5bf6c29"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=772884&source=collection&query=Cakes",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "509529",
                    "name": "Cake's House",
                    "cloudinaryImageId": "ga9ciwfrtmves1x9mckh",
                    "locality": "Saket Nagar",
                    "areaName": "Juhi Kalan",
                    "costForTwo": "₹400 for two",
                    "cuisines": [
                        "Bakery"
                    ],
                    "avgRating": 4.3,
                    "veg": true,
                    "parentId": "289841",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "150",
                    "sla": {
                        "deliveryTime": 45,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-10-20 23:59:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "v1695133679/badges/Pure_Veg111.png",
                                "description": "pureveg"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                                            "description": "pureveg"
                                        }
                                    }
                                ]
                            },
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "â‚¹100 OFF",
                        "subHeader": "ABOVE â‚¹249",
                        "discountTag": "FLAT DEAL",
                        "logoCtx": {
                            "text": "BENEFITS"
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {},
                        "commsStyling": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=509529&source=collection&query=Cakes",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    }
]

export const biryaniRes= [
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
"collectionId": "83639",
"title": "Biryani",
"description": "Taste these delectable classics, delectable biryanis to make your day.",
"imageId": "COLLECTIONS/IMAGES/MERCH/2025/3/7/6b765643-8f10-4176-b1f4-5e096d4182c0_biryani nv (3) (1).png",
"aspectRatio": "3.44",
"cta": {
"link": "swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani,biryani,ads_pc_biryani",
"type": "collectionv2"
},
"type": "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
"count": "160 restaurants",
"navBarConfig": {}
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
"sortConfigs": [
{
"key": "relevance",
"title": "Relevance (Default)",
"selected": true,
"defaultSelection": true
},
{
"key": "deliveryTimeAsc",
"title": "Delivery Time"
},
{
"key": "modelBasedRatingDesc",
"title": "Rating"
},
{
"key": "costForTwoAsc",
"title": "Cost: Low to High"
},
{
"key": "costForTwoDesc",
"title": "Cost: High to Low"
}
],
"restaurantCount": 160,
"facetList": [
{
"label": "10 Mins Delivery",
"id": "isRestaurantBolt",
"selection": "SELECT_TYPE_SINGLESELECT",
"facetInfo": [
{
"label": "10 Mins Delivery",
"id": "isRestaurantBoltfacetquery0",
"analytics": {},
"openFilter": true
}
],
"viewType": "VIEW_TYPE_FLATTENED",
"subLabel": "Filterby",
"icon": "COLLECTIONS/IMAGES/MERCH/2024/12/18/4b2e8903-0e25-401b-8ede-088491b4cfa0_937977a3-b03b-4a9e-8b6a-24937664d1a9_pic.png",
"selectedIcon": "COLLECTIONS/IMAGES/MERCH/2024/12/26/3072d307-2f8e-471c-862d-d426fb93c0bf_4b2e8903-0e25-401b-8ede-088491b4cfa0_937977a3-b03b-4a9e-8b6a-24937664d1a9_pic.png"
},
{
"label": "Veg/Non-Veg",
"id": "isVeg",
"selection": "SELECT_TYPE_MULTISELECT",
"facetInfo": [
{
"label": "Non Veg",
"id": "isVegfacetquery0",
"analytics": {},
"openFilter": true
},
{
"label": "Pure Veg",
"id": "isVegfacetquery1",
"analytics": {},
"openFilter": true
}
],
"viewType": "VIEW_TYPE_HALF_CARD",
"subLabel": "Filterby",
"openFilter": true
},
{
"label": "Ratings",
"id": "rating",
"selection": "SELECT_TYPE_MULTISELECT",
"facetInfo": [
{
"label": "Ratings",
"id": "ratingfacetquery0",
"analytics": {},
"openFilter": true
},
{
"label": "Ratings 4.0+",
"id": "ratingfacetquery1",
"analytics": {},
"openFilter": true
},
{
"label": "Ratings 4.5+",
"id": "ratingfacetquery2",
"analytics": {},
"openFilter": true
}
],
"viewType": "VIEW_TYPE_HALF_CARD",
"subLabel": "Filterby",
"openFilter": true
},
{
"label": "Delivery Time",
"id": "deliveryTime",
"selection": "SELECT_TYPE_MULTISELECT",
"facetInfo": [
{
"label": "Less than 30 mins",
"id": "deliveryTimefacetquery0",
"analytics": {},
"openFilter": true
},
{
"label": "Less than 45 mins",
"id": "deliveryTimefacetquery1",
"analytics": {},
"openFilter": true
}
],
"viewType": "VIEW_TYPE_HALF_CARD",
"subLabel": "Filterby",
"openFilter": true
},
{
"label": "Cost For Two",
"id": "costForTwo",
"selection": "SELECT_TYPE_MULTISELECT",
"facetInfo": [
{
"label": "Less than Rs. 300",
"id": "costForTwofacetquery0",
"analytics": {},
"openFilter": true
},
{
"label": "Rs.300 - Rs.600",
"id": "costForTwofacetquery1",
"analytics": {},
"openFilter": true
},
{
"label": "Greater than Rs. 600",
"id": "costForTwofacetquery2",
"analytics": {},
"openFilter": true
}
],
"viewType": "VIEW_TYPE_HALF_CARD",
"subLabel": "Filterby",
"openFilter": true
}
],
"widgetId": "inlineFacetFilter"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
"layout": {
"rows": 1,
"widgetPadding": {
"left": 16,
"right": 16
},
"widgetTheme": {
"defaultMode": {
"backgroundColour": "#FFFFFF",
"theme": "THEME_TYPE_LIGHT"
},
"darkMode": {
"backgroundColour": "#1B3028",
"theme": "THEME_TYPE_DARK"
}
}
},
"id": "restaurantCountWidget",
"gridElements": {
"infoWithStyle": {
"@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
"text": "160 Restaurants to explore",
"headerStyling": {
"textSize": 15,
"textColor": "text_color_highest_emphasis",
"textFontName": "FONT_NAME_HEADER_H5",
"maxLines": 1
}
}
}
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "1030932",
"name": "Thalaiva Biryani",
"cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/7/2/8bf3bbe1-bccf-4067-9340-4ef0ce3caf28_4928d658-b637-4deb-8c57-b975167aaf4e.jpeg",
"locality": "Permat",
"areaName": "Harsh Nagar",
"costForTwo": "₹400 for two",
"cuisines": [
"Biryani",
"Mughlai",
"Lucknowi",
"Hyderabadi",
"Kebabs",
"Desserts",
"Beverages"
],
"avgRating": 4.4,
"parentId": "582792",
"avgRatingString": "4.4",
"totalRatingsString": "183",
"promoted": true,
"adTrackingId": "cid=34027057~p=0~adgrpid=34027057#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1030932~plpr=COLLECTION~eid=6fee004b-0cee-40d5-bb57-7357f00c2c8d~srvts=1760871802636~collid=83639",
"sla": {
"deliveryTime": 45,
"lastMileTravel": 3.7,
"serviceability": "SERVICEABLE",
"slaString": "40-50 mins",
"lastMileTravelString": "3.7 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-10-19 23:59:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"textBased": {},
"imageBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT â‚¹89",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"campaignId": "34027057"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=1030932&source=collection&query=Biryani",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "318387",
"name": "Zyka Restaurant(Parade)",
"cloudinaryImageId": "dpawm0slsgjpzdgybh6v",
"locality": "Parade",
"areaName": "Parade",
"costForTwo": "₹200 for two",
"cuisines": [
"Mughlai",
"Biryani",
"Chinese",
"Tandoor",
"Pizzas",
"Desserts"
],
"avgRating": 4.2,
"parentId": "16494",
"avgRatingString": "4.2",
"totalRatingsString": "23K+",
"sla": {
"deliveryTime": 30,
"lastMileTravel": 1.5,
"serviceability": "SERVICEABLE",
"slaString": "30-40 mins",
"lastMileTravelString": "1.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-10-20 00:30:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"textBased": {},
"imageBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹125 OFF",
"subHeader": "ABOVE â‚¹199",
"discountTag": "FLAT DEAL",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "3.9",
"ratingCount": "2.0K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=318387&source=collection&query=Biryani",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "554302",
"name": "Bikkgane Biryani",
"cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/6/24/28ba8630-7acf-4c97-b653-67acbd83b535_6b97bc3b-ddf2-476d-9849-aa8b0e0e7856.jpg",
"locality": "Avon Market Road",
"areaName": "Kakadeo",
"costForTwo": "₹350 for two",
"cuisines": [
"Biryani",
"Hyderabadi",
"Andhra",
"South Indian",
"North Indian",
"Mughlai",
"Kebabs"
],
"avgRating": 4.4,
"parentId": "5070",
"avgRatingString": "4.4",
"totalRatingsString": "9.3K+",
"promoted": true,
"adTrackingId": "cid=33443446~p=1~adgrpid=33443446#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=554302~plpr=COLLECTION~eid=f6d99dde-0604-4084-8053-ed1e5a88a3c8~srvts=1760871802636~collid=83639",
"sla": {
"deliveryTime": 44,
"lastMileTravel": 7.4,
"serviceability": "SERVICEABLE",
"slaString": "40-45 mins",
"lastMileTravelString": "7.4 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-10-20 02:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Biryani.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"textBased": {},
"imageBased": {
"badgeObject": [
{
"attributes": {
"imageId": "Rxawards/_CATEGORY-Biryani.png",
"description": "Delivery!"
}
}
]
},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT â‚¹89",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"campaignId": "33443446"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=554302&source=collection&query=Biryani",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "125424",
"name": "Ajmeri Darbar Chamanganj",
"cloudinaryImageId": "v8vwffojtsoarkcnsoih",
"locality": "Chaman Ganj",
"areaName": "Chaman Ganj",
"costForTwo": "₹200 for two",
"cuisines": [
"Biryani",
"Mughlai",
"North Indian",
"Tandoor"
],
"avgRating": 4.2,
"parentId": "28360",
"avgRatingString": "4.2",
"totalRatingsString": "21K+",
"sla": {
"deliveryTime": 25,
"lastMileTravel": 1.5,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "1.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-10-19 23:59:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "android/static-assets/icons/big_rx.png",
"description": "bolt!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "bolt!",
"imageId": "android/static-assets/icons/big_rx.png"
}
}
]
},
"textExtendedBadges": {},
"textBased": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "â‚¹125 OFF",
"subHeader": "ABOVE â‚¹199",
"discountTag": "FLAT DEAL",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=125424&source=collection&query=Biryani",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "241296",
"name": "Biryani By Kilo",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/4/11ca9f8c-cdc5-4d25-80e5-87375404815b_241296.JPG",
"locality": "Swaroop Nagar",
"areaName": "Fazalganj",
"costForTwo": "₹499 for two",
"cuisines": [
"Biryani",
"Hyderabadi",
"North Indian",
"Kebabs",
"Mughlai",
"Desserts"
],
"avgRating": 4.3,
"parentId": "130",
"avgRatingString": "4.3",
"totalRatingsString": "8.5K+",
"promoted": true,
"adTrackingId": "cid=33443383~p=2~adgrpid=33443383#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=241296~plpr=COLLECTION~eid=37d430c0-59df-4ca5-a59d-4a8fe0346075~srvts=1760871802636~collid=83639",
"sla": {
"deliveryTime": 44,
"lastMileTravel": 5,
"serviceability": "SERVICEABLE",
"slaString": "40-50 mins",
"lastMileTravelString": "5.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-10-20 01:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Biryani.png",
"description": "Delivery!"
},
{
"imageId": "newg.png",
"description": "Gourmet"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"textBased": {},
"imageBased": {
"badgeObject": [
{
"attributes": {
"imageId": "Rxawards/_CATEGORY-Biryani.png",
"description": "Delivery!"
}
},
{
"attributes": {
"description": "Gourmet",
"imageId": "newg.png"
}
}
]
},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT â‚¹89",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "3.9",
"ratingCount": "676"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"campaignId": "33443383"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=241296&source=collection&query=Biryani",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "831832",
"name": "Saba Biryani",
"cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/5/9/ed1cdc6f-9d8e-4365-b5ce-35cc0e0b9481_8fb504a5-4f3b-46db-b0fd-81a3a3cdf949.jpg",
"locality": "Talaq Mahal",
"areaName": "Naveen Market",
"costForTwo": "₹200 for two",
"cuisines": [
"Biryani",
"Tandoor"
],
"avgRating": 4.1,
"parentId": "254123",
"avgRatingString": "4.1",
"totalRatingsString": "431",
"sla": {
"deliveryTime": 28,
"lastMileTravel": 1.6,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "1.6 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-10-19 23:59:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"textBased": {},
"imageBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "â‚¹100 OFF",
"subHeader": "ABOVE â‚¹199",
"discountTag": "FLAT DEAL",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=831832&source=collection&query=Biryani",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "361082",
"name": "Behrouz Biryani",
"cloudinaryImageId": "1a8dfa8b2a73ddf7c6193465ab24c898",
"locality": "Permat",
"areaName": "Harsh Nagar",
"costForTwo": "₹500 for two",
"cuisines": [
"Biryani",
"North Indian",
"Kebabs",
"Mughlai",
"Beverages",
"Desserts"
],
"avgRating": 4.4,
"parentId": "1803",
"avgRatingString": "4.4",
"totalRatingsString": "4.2K+",
"promoted": true,
"adTrackingId": "cid=34027038~p=3~adgrpid=34027038#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=361082~plpr=COLLECTION~eid=f02b3d5e-220a-49cd-8da0-fc7573ed6ebc~srvts=1760871802636~collid=83639",
"sla": {
"deliveryTime": 45,
"lastMileTravel": 3.7,
"serviceability": "SERVICEABLE",
"slaString": "40-50 mins",
"lastMileTravelString": "3.7 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-10-19 23:59:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Biryani.png",
"description": "Delivery!"
},
{
"imageId": "newg.png",
"description": "Gourmet"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"imageId": "Rxawards/_CATEGORY-Biryani.png",
"description": "Delivery!"
}
},
{
"attributes": {
"imageId": "newg.png",
"description": "Gourmet"
}
}
]
},
"textExtendedBadges": {},
"textBased": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT â‚¹99",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"campaignId": "34027038"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=361082&source=collection&query=Biryani",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
}
];



// export default rollsRes;