import importlib as imp
import numpy as np
import matplotlib.pyplot as plt
#from numpy import log,exp,sqrt,cosh,sinh
# from utils.physicsConstants import q,eV,kB,eps0,nm,cm3
from utils import physicsConstants as cst;imp.reload(cst)
from utils import displayStandards as dsp;imp.reload(dsp)


planets = {'mercury':{'Ra':0.466697,'Rp':0.307499,'e':0.025,'a':0.387098,'T':115.88},
           'Venus' : {'Ra':.0728213,'Rp':0.718440,'e':0.006772,'T':224.701,'a':0.723332},
           'earth' : {'Ra':152097597/cst.AU,'Rp':147098450/cst.AU,'e':0.0167086,'T':365.256,'a':149598023/cst.AU},
           'mars'  : {'Ra':1.66621,'Rp':1.3814,'e':0.0934,'T':686.980,'a':1.52368055},
           }
mc2 = cst.c**2/1e5


def Veff (r,L,k,gr=False):
    Veff = -k/r + 1/2*(L/r)**2 
    if gr : 
        return Veff - k*L**2/cst.c**2/r**3 
    else:
        return Veff


## toy Newton diagram example
k = 1
r = np.linspace(0.1,20,1000)
Ls = np.arange(4)
plts=[[r,Veff(r,L,k,0),c,'$\\tilde{L}=%.1f$' %L] for c,L in zip(dsp.getCs('hsv',len(Ls)),Ls)
    ]
dsp.stddisp(plts,title="$\\tilde{V}_{eff}$ at different $\\tilde{L}$ ",labs=['$r$', '$\\tilde V_{eff} $'],lw=2,xylims=[0.1,20,-1,1 ],
            name="figs/Newton_Veff.png",opt='p')




if 0 : 
    ####  Newtonian Planets
    def L(planet):
        T,ra,rp = [planets[planet][v] for v in ['T','Ra','Rp']]
        d_to_s=3600*24
        return np.pi*(ra+rp)*np.sqrt(ra*rp)/(T*d_to_s)

    k = cst.G*cst.M_sun 
    R = 46e6#150.00e6 #km Mercury
    L = L('earth')
    plts=[
        [r/cst.AU,Veff(r,k,L,0)/mc2,'b','Newton'],
        [r/cst.AU,Veff(r,k,L,1)/mc2,'r','GR'],
        ]
    dsp.stddisp(plts,labs=['$r (AU)$', '$\\tilde E (/c^2)$'],lw=2,)#xylims=[0.1,7,0,0 ])
    
if 0:
    # Newton 
    k*=1000
    L = np.sqrt(k*R)
    nCs = 10
    plts = [[r/R,Veff(r,L*i,0)/mc2,c,'L=%.1f' %i] for i,c in zip(np.linspace(0.1,2,nCs),dsp.getCs('Blues',nCs))]
    dsp.stddisp(plts,title='Newtonian Planets',labs=['$r (AU)$', '$\\tilde T(/c^2)$'],lw=2,xylims=[-0.1,6,-6,2 ])

if 0:
    #### simple GR with various L
    nCs = 10
    plts = [[r/R,Veff(r,L*i,1)/mc2,c,'L=%.1f' %i] for i,c in zip(np.linspace(1.5,3,nCs),dsp.getCs('Blues',nCs))]
    dsp.stddisp(plts,title='GR Kinetic energy',labs=['$r (AU)$', '$\\tilde T(/c^2)$'],lw=2,
    )#xylims=[-0.1,6,-6,2 ])
