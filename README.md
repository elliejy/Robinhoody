Robinhoody
Robinhoody is a clone of Robinhood. The inlcuded features offer users to create a portfolio of companies to invest and to monitor its performance over time. Publicly traded US companies have a detailed page with its stock price information.


Technologies
Backend: Rails/ActiveRecord/PostgreSQL
Frontend: React/Redux
IEX API
Recharts
CSS
Features
Secure frontend to backend user authentication using BCrypt
Real-time and historical price data of all stocks traded on the NASDAQ and NYSE exchanges
Interactive charts displaying stock price fluctuation over time
Dashboard displaying share ownership and current market price of all stocks that make up a user's portfolio
Ability to search stocks by both their ticker symbol and Company name
Once a user logs in, they are immediately redirected to their dashboard, which shows a chart displaying their portfolio. 


Stock Show Page
The stock show page contains current and historical price information about the stock, general company information and allows users to subscribe to the page to monitor. Colored elements of the page will be rendered in green if the chart being displayed shows a positive price fluctuation, and in red when the price fluctuation is negative.


Fetching Stock Information
When a stock show page is visited, a variety of API calls are made to fetch the necessary information to render the stock's price chart, information ('About' section) and relevant news articles. The following APIs are hit

Back-end Rails API to receive name of Company
IEX API - 3 separate API calls
Stock information (CEO, employees, etc.)
