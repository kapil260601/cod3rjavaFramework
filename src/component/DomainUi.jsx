import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DomainInput = () => {
    const [domainName, setDomainName] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState('');
    const [domainsList, setDomainsList] = useState([]);
    const [subdomains, setSubdomains] = useState('');
    const [selectedDomain, setSelectedDomain] = useState('');

    useEffect(() => {
        // Fetch the list of domains from the Flask API
        const fetchDomains = async () => {
            try {
                const response = await axios.get('http://localhost:80/domains');
                setDomainsList(response.data);
                // const response1 = await axios.post('http://127.0.0.1/livesubdomains', {
                //     domainName: 'pocketfm'  // Modify this to your desired domainName
                // });
                // const subdomainsData = response1.data;
                // const subdomainList = subdomainsData.map(subdomain => subdomain.livesubdomain);
                // setSubdomains(subdomainList.join('\n'));
            } catch (error) {
                console.error('Error fetching domains:', error);
            }
        };

        fetchDomains();
    }, []);
    const handleDomainChange = async (e) => {
        const selectedDomainName = e.target.value;
        setSelectedDomain(selectedDomainName);

        try {
            const response = await axios.post('http://127.0.0.1/livesubdomains', {
                domainName: selectedDomainName
            });
            const subdomainsData = response.data;
            const subdomainList = subdomainsData.map(subdomain => subdomain.livesubdomain);
            setSubdomains(subdomainList.join('\n'));
        } catch (error) {
            console.error('Error fetching subdomains:', error);
        }
    };
    const handleDomainNameChange = (e) => {
        setDomainName(e.target.value);
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = async () => {
        const domains = inputValue.split(' ')
            .map(domain => domain.trim().replace(/^\*./, ''))
            .filter(Boolean);
        try {
            const response = await axios.post('http://localhost:80/subdomain/wildcards', {
                domainName: domainName,
                wildcards: domains
            });
            setResult(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <textarea
            value={subdomains}
            readOnly
            style={{ width: '100%', height: '200px' }}
        />
            <input
                type="text"
                placeholder="Enter domain name..."
                value={domainName}
                onChange={handleDomainNameChange}
                style={{ width: '100%', marginBottom: '10px' }}
            />
            <select
                onChange={handleDomainChange}
                style={{ width: '100%', marginBottom: '10px' }}
            >
                <option value="">Select a domain...</option>
                {domainsList.map(domain => (
                    <option key={domain.id} value={domain.doamins_name}>{domain.domain_name}</option>
                ))}
            </select>
            <textarea
                placeholder="Enter wildcard domains separated by spaces..."
                value={inputValue}
                onChange={handleChange}
                style={{ width: '100%', height: '100px', marginBottom: '10px' }}
            />
            <button onClick={handleSubmit}>Submit</button>
            <pre>{result}</pre>
        </div>
    );
};

export default DomainInput;
