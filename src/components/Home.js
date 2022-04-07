import './Home.css'
import { Input, Switch } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'
import sun from '../img/sun.png'
import cloud from '../img/cloud.png'

const { Search } = Input;

function Home() {

    function onChange(checked) {
        console.log(`switch to ${checked}`);
    }

    const onSearch = () => {

    }
    return (
        <div className="container">
            <div className='input-search'>
                <Search placeholder="Search..." onSearch={onSearch} enterButton />
            </div>
            <div className='selected'>
                <ul>
                    <li activeclassname="active">
                        <a href='today'>Today</a>
                    </li>
                    <li>
                        <a href='today'>Hourly</a>
                    </li>
                    <li>
                        <a href='today'>10 days</a>
                    </li>
                    <li>
                        <a href='today'>Monthly</a>
                    </li>
                </ul>
            </div>
            <div className="views">

                <div className='views-left'>
                    <MenuOutlined style={{ color: '#1890ff' }} />

                    <div className='views-left-top'>

                        <h1>Hà Nội</h1>
                        <Switch defaultChecked onChange={onChange} />
                        <span style={{ marginBottom: '20px' }}>°C</span>
                    </div>
                    <div><span>10:9AM, Wed, Apr 6, 2022</span></div>
                    <br />
                    <div><img style={{ width: '80px' }} src={sun} alt='' />
                        <span><b
                            style={{ fontSize: '30px', marginLeft: '20px' }}
                        >3°C</b></span>
                    </div>
                    <br />
                    <div>
                        <h1><b>Clear Sky</b></h1>
                    </div>
                    <div className='infoweather'>
                        <div className='humidity'>
                            <h3>Humidity</h3>
                            <div>43%</div>
                        </div>
                        <div>
                            <h3>Wind speed</h3>
                            <div>6.08km/j</div>
                        </div>
                    </div>

                </div>

                <div className='views-right'>
                    <CloseOutlined style={{ color: '#1890ff' }} />
                    <div className='views-right-top'>
                        <h3>Temperature</h3>
                        <div><h1>Chỗ này biểu đồ</h1></div>
                    </div>
                    <div className='views-right-bottom'>
                        <div>
                            <h3 style={{ marginLeft: '15px' }}>Today</h3>
                            <img style={{ width: '80px' }} src={sun} alt='' />
                            <div className='humidity'>
                                <h3 style={{ marginLeft: '5px' }}>Humidity</h3>
                                <div style={{ marginLeft: '10px' }}>43%</div>
                            </div>
                        </div>
                        <div>
                            <h3 style={{ marginLeft: '15px' }}>Apr 07</h3>
                            <img style={{ width: '80px' }} src={sun} alt='' />
                            <div className='humidity'>
                                <h3 style={{ marginLeft: '5px' }}>Humidity</h3>
                                <div style={{ marginLeft: '10px' }}>31%</div>
                            </div>
                        </div>
                        <div>
                            <h3 style={{ marginLeft: '15px' }}>Apr 08</h3>
                            <img style={{ width: '80px' }} src={cloud} alt='' />
                            <div className='humidity'>
                                <h3 style={{ marginLeft: '5px' }}>Humidity</h3>
                                <div style={{ marginLeft: '10px' }}>38%</div>
                            </div>
                        </div>
                        <div>
                            <h3 style={{ marginLeft: '15px' }}>Apr 09</h3>
                            <img style={{ width: '80px' }} src={cloud} alt='' />
                            <div className='humidity'>
                                <h3 style={{ marginLeft: '5px' }}>Humidity</h3>
                                <div style={{ marginLeft: '10px' }}>21%</div>
                            </div>
                        </div>
                        <div>
                            <h3 style={{ marginLeft: '15px' }}>Apr 10</h3>
                            <img style={{ width: '80px' }} src={sun} alt='' />
                            <div className='humidity'>
                                <h3 style={{ marginLeft: '5px' }}>Humidity</h3>
                                <div style={{ marginLeft: '10px' }}>43%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home