import React, { useState } from "react";
import { geographyData, type PrefectureData } from "./data";
import japanMapImage from "./japan-map.png"; // 地図画像をインポート

// 個別の回答セルコンポーネント
interface AnswerCellProps {
  text: string;
  isVisible: boolean;
  onClick: () => void;
}

const AnswerCell: React.FC<AnswerCellProps> = ({
  text,
  isVisible,
  onClick,
}) => (
  <td onClick={onClick} className="answer-cell-container">
    <span className={`answer-cell ${isVisible ? "visible" : ""}`}>{text}</span>
  </td>
);

// Appコンポーネント
const App: React.FC = () => {
  // 表示されているセルを管理するState (行ID_セルタイプの形式)
  const [visibleCells, setVisibleCells] = useState<Set<string>>(new Set());

  // セルがクリックされたときの処理
  const handleCellClick = (rowId: number, cellType: string) => {
    const cellKey = `${rowId}_${cellType}`;
    setVisibleCells((prevVisibleCells) => {
      const newVisibleCells = new Set(prevVisibleCells);
      if (newVisibleCells.has(cellKey)) {
        newVisibleCells.delete(cellKey); // すでに表示されていれば隠す
      } else {
        newVisibleCells.add(cellKey); // 隠れていれば表示する
      }
      return newVisibleCells;
    });
  };

  // 全部表示する処理
  const handleShowAll = () => {
    const allCells = new Set<string>();
    geographyData.forEach((data) => {
      allCells.add(`${data.id}_prefecture`);
      allCells.add(`${data.id}_capital`);
      allCells.add(`${data.id}_attraction1`);
      allCells.add(`${data.id}_attraction2`);
    });
    setVisibleCells(allCells);
  };

  // 全部隠す処理
  const handleHideAll = () => {
    setVisibleCells(new Set());
  };

  // 県以外隠す処理
  const handleHideExceptPrefecture = () => {
    const prefectureCells = new Set<string>();
    geographyData.forEach((data) => {
      prefectureCells.add(`${data.id}_prefecture`);
    });
    setVisibleCells(prefectureCells);
  };

  // 観光資源だけ隠す処理
  const handleHideAttractions = () => {
    const nonAttractionCells = new Set<string>();
    geographyData.forEach((data) => {
      nonAttractionCells.add(`${data.id}_prefecture`);
      nonAttractionCells.add(`${data.id}_capital`);
    });
    setVisibleCells(nonAttractionCells);
  };

  return (
    <div className="app-container">
      <header>
        <h1>テスト対策ツール</h1>
      </header>
      <main className="main-content">
        <div className="table-container">
          <div className="controls">
            <button onClick={handleShowAll} className="control-button show-all">
              全部表示
            </button>
            <button onClick={handleHideAll} className="control-button hide-all">
              全部隠す
            </button>
            <button onClick={handleHideExceptPrefecture} className="control-button hide-except-prefecture">
              県以外隠す
            </button>
            <button onClick={handleHideAttractions} className="control-button hide-attractions">
              観光資源だけ隠す
            </button>
          </div>
          <table className="study-table">
            <thead>
              <tr>
                <th>番号</th>
                <th>都道府県名</th>
                <th>県庁所在地</th>
                <th>観光資源1</th>
                <th>観光資源2</th>
              </tr>
            </thead>
            <tbody>
              {geographyData.map((data: PrefectureData) => (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <AnswerCell
                    text={data.prefecture}
                    isVisible={visibleCells.has(`${data.id}_prefecture`)}
                    onClick={() => handleCellClick(data.id, "prefecture")}
                  />
                  <AnswerCell
                    text={data.capital}
                    isVisible={visibleCells.has(`${data.id}_capital`)}
                    onClick={() => handleCellClick(data.id, "capital")}
                  />
                  <AnswerCell
                    text={data.attractions[0]}
                    isVisible={visibleCells.has(`${data.id}_attraction1`)}
                    onClick={() => handleCellClick(data.id, "attraction1")}
                  />
                  <AnswerCell
                    text={data.attractions[1]}
                    isVisible={visibleCells.has(`${data.id}_attraction2`)}
                    onClick={() => handleCellClick(data.id, "attraction2")}
                  />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="map-container">
          <img src={japanMapImage} alt="日本の白地図" />
        </div>
      </main>
    </div>
  );
};

export default App;
