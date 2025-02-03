export function AnalyticsChart() {
  const data = [
    {
      id: "tendencias",
      data: [
        { x: "Ene", y: 30 },
        { x: "Feb", y: 45 },
        { x: "Mar", y: 60 },
        { x: "Abr", y: 80 },
        { x: "May", y: 65 },
      ]
    }
  ];

  return (
    <div className="h-[400px] w-full">
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 0, max: 100 }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        enablePointLabel={true}
        pointLabel="y"
        pointLabelYOffset={-12}
        useMesh={true}
        theme={{
          axis: {
            ticks: {
              text: {
                fill: "#fff"
              }
            }
          },
          grid: {
            line: {
              stroke: "#333"
            }
          }
        }}
      />
    </div>
  );
}