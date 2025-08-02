'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'

export default function ToolsPage() {
  const [activeCalculator, setActiveCalculator] = useState('feedlot')

  // Feedlot Breakeven Calculator State
  const [feedlotInputs, setFeedlotInputs] = useState({
    purchasePrice: '',
    purchaseWeight: '',
    targetWeight: '',
    feedCostPerTon: '',
    feedConversion: '',
    yardage: '',
    interest: '',
    death: '',
    other: ''
  })

  // Cost of Gain Calculator State
  const [gainInputs, setGainInputs] = useState({
    initialWeight: '',
    finalWeight: '',
    days: '',
    totalFeedCost: '',
    yardageCost: '',
    veterinaryCost: '',
    otherCosts: ''
  })

  // Pasture Calculator State
  const [pastureInputs, setPastureInputs] = useState({
    acres: '',
    costPerAcre: '',
    carryingCapacity: '',
    months: '',
    supplementalFeed: ''
  })

  const calculateFeedlotBreakeven = () => {
    const purchase = parseFloat(feedlotInputs.purchasePrice) || 0
    const purchaseWt = parseFloat(feedlotInputs.purchaseWeight) || 0
    const targetWt = parseFloat(feedlotInputs.targetWeight) || 0
    const feedCost = parseFloat(feedlotInputs.feedCostPerTon) || 0
    const conversion = parseFloat(feedlotInputs.feedConversion) || 0
    const yardage = parseFloat(feedlotInputs.yardage) || 0
    const interest = parseFloat(feedlotInputs.interest) || 0
    const death = parseFloat(feedlotInputs.death) || 0
    const other = parseFloat(feedlotInputs.other) || 0

    if (!purchase || !purchaseWt || !targetWt || !feedCost || !conversion) {
      return null
    }

    const gainNeeded = targetWt - purchaseWt
    const totalFeedCost = (gainNeeded * conversion * feedCost) / 2000 // Convert tons to pounds
    const totalCost = purchase + totalFeedCost + yardage + interest + death + other
    const breakeven = totalCost / targetWt

    return {
      gainNeeded,
      totalFeedCost: totalFeedCost.toFixed(2),
      totalCost: totalCost.toFixed(2),
      breakeven: breakeven.toFixed(2)
    }
  }

  const calculateCostOfGain = () => {
    const initial = parseFloat(gainInputs.initialWeight) || 0
    const final = parseFloat(gainInputs.finalWeight) || 0
    const days = parseFloat(gainInputs.days) || 0
    const feedCost = parseFloat(gainInputs.totalFeedCost) || 0
    const yardage = parseFloat(gainInputs.yardageCost) || 0
    const vet = parseFloat(gainInputs.veterinaryCost) || 0
    const other = parseFloat(gainInputs.otherCosts) || 0

    if (!initial || !final || !days) {
      return null
    }

    const totalGain = final - initial
    const avgDailyGain = totalGain / days
    const totalCost = feedCost + yardage + vet + other
    const costPerPound = totalGain > 0 ? totalCost / totalGain : 0

    return {
      totalGain: totalGain.toFixed(1),
      avgDailyGain: avgDailyGain.toFixed(2),
      totalCost: totalCost.toFixed(2),
      costPerPound: costPerPound.toFixed(2)
    }
  }

  const calculatePastureCost = () => {
    const acres = parseFloat(pastureInputs.acres) || 0
    const costPerAcre = parseFloat(pastureInputs.costPerAcre) || 0
    const capacity = parseFloat(pastureInputs.carryingCapacity) || 0
    const months = parseFloat(pastureInputs.months) || 0
    const supplement = parseFloat(pastureInputs.supplementalFeed) || 0

    if (!acres || !costPerAcre || !capacity || !months) {
      return null
    }

    const totalPastureCost = acres * costPerAcre
    const totalHead = acres * capacity
    const costPerHead = totalPastureCost / totalHead
    const costPerHeadPerMonth = costPerHead / months
    const totalCostPerHead = costPerHead + supplement

    return {
      totalPastureCost: totalPastureCost.toFixed(2),
      totalHead: totalHead.toFixed(0),
      costPerHead: costPerHead.toFixed(2),
      costPerHeadPerMonth: costPerHeadPerMonth.toFixed(2),
      totalCostPerHead: totalCostPerHead.toFixed(2)
    }
  }

  const feedlotResults = calculateFeedlotBreakeven()
  const gainResults = calculateCostOfGain()
  const pastureResults = calculatePastureCost()

  const calculators = [
    { id: 'feedlot', name: 'Feedlot Breakeven', icon: '🐂' },
    { id: 'gain', name: 'Cost of Gain', icon: '📈' },
    { id: 'pasture', name: 'Pasture Cost', icon: '🌾' }
  ]

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-ag-green-50 to-white overflow-hidden">
        <div className="container-max relative z-10 text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Agricultural Financial Tools</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
              Free calculators to help you make informed financial decisions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional-grade calculators designed specifically for cattle operations. 
              Make data-driven decisions with accurate cost analysis and breakeven calculations.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Selection */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {calculators.map((calc) => (
              <button
                key={calc.id}
                onClick={() => setActiveCalculator(calc.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCalculator === calc.id
                    ? 'bg-ag-green-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-ag-green-50 hover:text-ag-green-600'
                }`}
              >
                <span className="text-xl">{calc.icon}</span>
                <span>{calc.name}</span>
              </button>
            ))}
          </div>

          {/* Feedlot Breakeven Calculator */}
          {activeCalculator === 'feedlot' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-3xl mr-3">🐂</span>
                  Feedlot Breakeven Calculator
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Purchase Price ($/cwt)
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        value={feedlotInputs.purchasePrice}
                        onChange={(e) => setFeedlotInputs({...feedlotInputs, purchasePrice: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ag-green-500 focus:border-transparent"
                        placeholder="180.00"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Purchase Weight (lbs)
                      </label>
                      <input
                        type="number"
                        value={feedlotInputs.purchaseWeight}
                        onChange={(e) => setFeedlotInputs({...feedlotInputs, purchaseWeight: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ag-green-500 focus:border-transparent"
                        placeholder="750"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Target Weight (lbs)
                      </label>
                      <input
                        type="number"
                        value={feedlotInputs.targetWeight}
                        onChange={(e) => setFeedlotInputs({...feedlotInputs, targetWeight: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ag-green-500 focus:border-transparent"
                        placeholder="1350"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Feed Cost ($/ton)
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        value={feedlotInputs.feedCostPerTon}
                        onChange={(e) => setFeedlotInputs({...feedlotInputs, feedCostPerTon: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ag-green-500 focus:border-transparent"
                        placeholder="280.00"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Feed Conversion (lbs feed per lb gain)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={feedlotInputs.feedConversion}
                        onChange={(e) => setFeedlotInputs({...feedlotInputs, feedConversion: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ag-green-500 focus:border-transparent"
                        placeholder="6.5"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Yardage ($/head)
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        value={feedlotInputs.yardage}
                        onChange={(e) => setFeedlotInputs({...feedlotInputs, yardage: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ag-green-500 focus:border-transparent"
                        placeholder="45.00"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Interest ($/head)
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        value={feedlotInputs.interest}
                        onChange={(e) => setFeedlotInputs({...feedlotInputs, interest: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ag-green-500 focus:border-transparent"
                        placeholder="25.00"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Death Loss ($/head)
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        value={feedlotInputs.death}
                        onChange={(e) => setFeedlotInputs({...feedlotInputs, death: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ag-green-500 focus:border-transparent"
                        placeholder="15.00"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Other Costs ($/head)
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        value={feedlotInputs.other}
                        onChange={(e) => setFeedlotInputs({...feedlotInputs, other: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ag-green-500 focus:border-transparent"
                        placeholder="20.00"
                      />
                    </div>
                    
                    {feedlotResults && (
                      <div className="bg-ag-green-50 p-6 rounded-lg border border-ag-green-200">
                        <h4 className="font-semibold text-ag-green-800 mb-4">Results:</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Gain Needed:</span>
                            <span className="font-medium">{feedlotResults.gainNeeded} lbs</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Total Feed Cost:</span>
                            <span className="font-medium">${feedlotResults.totalFeedCost}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Total Cost:</span>
                            <span className="font-medium">${feedlotResults.totalCost}</span>
                          </div>
                          <div className="flex justify-between text-lg font-bold text-ag-green-800 border-t border-ag-green-200 pt-2 mt-2">
                            <span>Breakeven Price:</span>
                            <span>${feedlotResults.breakeven}/cwt</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Cost of Gain Calculator */}
          {activeCalculator === 'gain' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-3xl mr-3">📈</span>
                  Cost of Gain Calculator
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Initial Weight (lbs)
                      </label>
                      <input
                        type="number"
                        value={gainInputs.initialWeight}
                        onChange={(e) => setGainInputs({...gainInputs, initialWeight: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ag-green-500 focus:border-transparent"
                        placeholder="750"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Final Weight (lbs)
                      </label>
                      <input
                        type="number"
                        value={gainInputs.finalWeight}
                        onChange={(e) => setGainInputs({...gainInputs, finalWeight: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ag-green-500 focus:border-transparent"
                        placeholder="1350"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Days on Feed
                      </label>
                      <input
                        type="number"
                        value={gainInputs.days}
                        onChange={(e) => setGainInputs({...gainInputs, days: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ag-green-500 focus:border-transparent"
                        placeholder="180"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Total Feed Cost ($)
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        value={gainInputs.totalFeedCost}
                        onChange={(e) => setGainInputs({...gainInputs, totalFeedCost: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ag-green-500 focus:border-transparent"
                        placeholder="350.00"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Yardage Cost ($)
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        value={gainInputs.yardageCost}
                        onChange={(e) => setGainInputs({...gainInputs, yardageCost: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ag-green-500 focus:border-transparent"
                        placeholder="45.00"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Veterinary Cost ($)
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        value={gainInputs.veterinaryCost}
                        onChange={(e) => setGainInputs({...gainInputs, veterinaryCost: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ag-green-500 focus:border-transparent"
                        placeholder="15.00"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Other Costs ($)
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        value={gainInputs.otherCosts}
                        onChange={(e) => setGainInputs({...gainInputs, otherCosts: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ag-green-500 focus:border-transparent"
                        placeholder="20.00"
                      />
                    </div>
                    
                    {gainResults && (
                      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-blue-800 mb-4">Results:</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Total Gain:</span>
                            <span className="font-medium">{gainResults.totalGain} lbs</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Avg Daily Gain:</span>
                            <span className="font-medium">{gainResults.avgDailyGain} lbs/day</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Total Cost:</span>
                            <span className="font-medium">${gainResults.totalCost}</span>
                          </div>
                          <div className="flex justify-between text-lg font-bold text-blue-800 border-t border-blue-200 pt-2 mt-2">
                            <span>Cost Per Pound of Gain:</span>
                            <span>${gainResults.costPerPound}/lb</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Pasture Cost Calculator */}
          {activeCalculator === 'pasture' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-3xl mr-3">🌾</span>
                  Pasture Cost Calculator
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Total Acres
                      </label>
                      <input
                        type="number"
                        value={pastureInputs.acres}
                        onChange={(e) => setPastureInputs({...pastureInputs, acres: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ag-green-500 focus:border-transparent"
                        placeholder="500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cost Per Acre ($/acre/year)
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        value={pastureInputs.costPerAcre}
                        onChange={(e) => setPastureInputs({...pastureInputs, costPerAcre: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ag-green-500 focus:border-transparent"
                        placeholder="50.00"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Carrying Capacity (head/acre)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={pastureInputs.carryingCapacity}
                        onChange={(e) => setPastureInputs({...pastureInputs, carryingCapacity: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ag-green-500 focus:border-transparent"
                        placeholder="0.5"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Grazing Months
                      </label>
                      <input
                        type="number"
                        value={pastureInputs.months}
                        onChange={(e) => setPastureInputs({...pastureInputs, months: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ag-green-500 focus:border-transparent"
                        placeholder="6"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Supplemental Feed ($/head)
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        value={pastureInputs.supplementalFeed}
                        onChange={(e) => setPastureInputs({...pastureInputs, supplementalFeed: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ag-green-500 focus:border-transparent"
                        placeholder="25.00"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    {pastureResults && (
                      <div className="bg-green-50 p-6 rounded-lg border border-green-200 w-full">
                        <h4 className="font-semibold text-green-800 mb-4">Results:</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Total Pasture Cost:</span>
                            <span className="font-medium">${pastureResults.totalPastureCost}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Total Head Capacity:</span>
                            <span className="font-medium">{pastureResults.totalHead} head</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Pasture Cost Per Head:</span>
                            <span className="font-medium">${pastureResults.costPerHead}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Cost Per Head Per Month:</span>
                            <span className="font-medium">${pastureResults.costPerHeadPerMonth}</span>
                          </div>
                          <div className="flex justify-between text-lg font-bold text-green-800 border-t border-green-200 pt-2 mt-2">
                            <span>Total Cost Per Head:</span>
                            <span>${pastureResults.totalCostPerHead}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Disclaimer</h3>
              <p className="text-yellow-700 text-sm">
                These calculators are provided for educational purposes and should be used as estimates only. 
                Actual results may vary based on market conditions, individual circumstances, and other factors. 
                Always consult with a qualified financial professional for specific advice regarding your operation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}