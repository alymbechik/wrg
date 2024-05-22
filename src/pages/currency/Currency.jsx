import React, {useEffect, useState} from 'react';
import {axiosInstance} from "../../utils/API/API";
import {showError, showSuccess} from "../../utils/alert/alert";
import './currency.css'
import { Helmet } from 'react-helmet';
import CircularIndeterminate from '../../components/Loading/loading';

const Currency = () => {

  const [currencyData, setCurrencyData] = useState([])
  const [isLoading, setIsLoading] = useState( false)

  const getCurrency = async () => {
    setIsLoading(true)
    try {
      const response = await axiosInstance.get('/current')
      const filteredCurrencyData = response.data.filter(item => item.id < 20 && item)
      setCurrencyData(filteredCurrencyData)
      showSuccess('Успешно', 'Курсы валют загружены')
    } catch (e) {
      if (e?.response?.status === 401) {
        showError('Неавторизованный доступ!')
      } else if(e?.response?.status === 403){
        showError('Нет доступа к получению данных', 'Проверьте токен!')
      } else{
        showError('Ошибка запроса', 'Повторите попытку позже')
      }
 
    } finally{
      setIsLoading(false)
    }
  }

  console.log(currencyData)

  useEffect(() => {
    getCurrency()
  }, []);

  return (
    <div className='currency'>
      <Helmet>
        <title>Обмен валют</title>
      </Helmet>
      <div className="valuta">
        <div>
          <img src="https://banks.kg/images/flags/usd@2x.png" width="22" height="16" className='flag'/>
        <span>USD</span>
        </div>
        <div>
          <img src="https://banks.kg/images/flags/eur@2x.png" width="22" height="16" className='flag'/>
        <span>EUR</span>
        </div>
        <div>
          <img src="https://banks.kg/images/flags/rub@2x.png" width="22" height="16" className='flag'/>
        <span>RUB</span>
        </div>
        
      </div>
      <div className='table'>
        <span className='test text-blue-muted'>название</span>
        <span className='value text-blue-muted'>покупка</span>
        <span className='value text-blue-muted'>продажа</span>
        <span className='value text-blue-muted'>покупка</span>
        <span className='value text-blue-muted'>продажа</span>
        <span className='value text-blue-muted'>покупка</span>
        <span className='value text-blue-muted'>продажа</span>
        <span className='value text-blue-muted'>время</span>
      </div>
      {
        isLoading ? 
        <CircularIndeterminate/>
        :
        currencyData.map((item, idx) => {
        return (
          <div
            key={idx}
            className='table'
          >
            <a href={item.website_url} className='title_c'>{item.title}</a>
            <span className='value'>{item.rates[0]?.buy_usd ? item.rates[0]?.buy_usd : 'Нет данных...'}</span>
            <span className='value'>{item.rates[0]?.sell_usd ? item.rates[0]?.sell_usd : 'Нет данных...'}</span>
            <span className='value'>{item.rates[0]?.buy_eur ? item.rates[0]?.buy_eur : 'Нет данных...'}</span>
            <span className='value'>{item.rates[0]?.sell_eur ? item.rates[0]?.sell_eur : 'Нет данных...'}</span>
            <span className='value'>{item.rates[0]?.buy_rub ? item.rates[0]?.buy_rub : 'Нет данных...'}</span>
            <span className='value'>{item.rates[0]?.sell_rub ? item.rates[0]?.sell_rub : 'Нет данных...'}</span>
            
            <span className='value'>Нет данных...</span>
          </div>
        )
      })
      }
    </div>
  );
};

export default Currency;