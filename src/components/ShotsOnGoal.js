import { useGlobalContext } from '../context';

const ShotsOnGoal = () => {
  const { shotsOnGoalData } = useGlobalContext();

  return (
    <>
      <div className='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 xl:w-1/2'>
        <div className='overflow-hidden rounded-lg shadow-xl'>
          {shotsOnGoalData && (
            <div>
              <table className='w-full'>
                <thead className='bg-[#38003c] text-white border-b-2 border-gray-200'>
                  <tr>
                    <th className='p-1 pl-3 text-sm font-semibold tracking-wide text-left'>
                      Shots On Goal
                    </th>

                    <th className='p-1 text-sm font-semibold tracking-wide text-center'>
                      Shots
                    </th>
                    <th className='p-1 text-sm font-semibold tracking-wide text-center hidden xl:table-cell'>
                      On Target
                    </th>
                    <th className='p-1 text-sm font-semibold tracking-wide text-center hidden xl:table-cell'>
                      Accuracy
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 bg-white'>
                  {shotsOnGoalData.map((item) => {
                    const {
                      id,
                      name,
                      shotsTotal,
                      teamLogo,
                      team,
                      shotsOnTarget,
                      shotsOnGoalAccuracyPct,
                    } = item;

                    return (
                      <tr key={id}>
                        <td className='p-1 pl-3 text-sm text-gray-700 text-left whitespace-nowrap'>
                          <img
                            className='object-contain h-5 inline-flex'
                            src={teamLogo}
                            alt='logo'
                          />{' '}
                          {name} <span className='text-xs'>({team})</span>
                        </td>
                        <td className='p-1 text-sm text-gray-700 text-center whitespace-nowrap'>
                          {shotsTotal}
                        </td>
                        <td className='p-1 text-sm text-gray-700 text-center whitespace-nowrap hidden xl:table-cell'>
                          {shotsOnTarget}
                        </td>
                        <td className='p-1 text-sm text-gray-700 text-center whitespace-nowrap hidden xl:table-cell'>
                          {shotsOnGoalAccuracyPct}%
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ShotsOnGoal;
