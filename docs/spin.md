# SPIN 

## Historical development 

Pauli wanted to explain [Stoner's orbital fillings](#orbital-filling) and the [anomalous zeeman effect](#anomalous_zeeman). 

### Stoner Spectroscopy and orbital-filling

In order to explain why elements had twice as many electrons $(N=2m_l)$ as they had angular momentum states $m_l=2l+1$, he offered that there must be :

- 1924 : a new quantum number $m_s$ that can only take 2 values (classically non-describable two-valuedness).
- 1925 : a rule stating that no 2 electrons can be in the same state (Pauli's exclusion principle).

This later lead to the idea that the electron state must be described by a double-valued wave function $\Psi=(\Psi_1,\Psi_2)\in\mathbb C^2$ (eventually called a spinor).  


### Anomalous Zeeman

In order to account qualitatively for $sp$ transitions under an external magnetic field $\mathbf B$ in alkali metals, he introduces an [angular momentum](#/Quantum_mechanics.md/angular-momentum) $\mathbf S$ (must obey the usual commutation relation of angular momentum) :


$$\begin{eqnarray}
\left[S_i,S_j \right] &=& i\hbar\epsilon_{ijk} S_k  \\
\left[\mathbf S^2,S_i \right] &=& 0
\end{eqnarray}
$$ 

so that an electron can experience energy shifts $\Delta E\propto -\frac{\mu_B}{\hbar}\mathbf{S}\cdot\mathbf B$. 

$\mathbf S^2$ must be invariant under a rotation $\mathbf U(\mathbf n,\theta)$ of $\theta$ about axis $\mathbf n$(any change of orientation in the lab should result in the same measure of $<\mathbf S^2>$). 
By looking at 2D complex valued wave vectors, Pauli found such angular momentum like operator $\mathbf S$.
The rotation $\mathbf U$ is an element of the special unitary group $SU(2)$ ($\mathbf U\in SU(2)$) and reads : 

$$\mathbf U(\mathbf n,\theta) =  e^{-i\frac{\theta}{2}\boldsymbol\sigma\cdot\mathbf n} = \cos(\theta/2)I - i\sin(\theta/2)\boldsymbol\sigma\cdot\mathbf n$$

where $\boldsymbol\sigma = (\boldsymbol\sigma_x,\boldsymbol\sigma_y,\boldsymbol\sigma_z)$ is composed of Pauli matrices so that $\boldsymbol\sigma\cdot\mathbf n=n_i\boldsymbol\sigma_i$. 

The angular momentum $\mathbf S=\frac{\hbar}{2}\boldsymbol\sigma$ and the spinor electron has momentum $\boldsymbol{\pi}=\boldsymbol{\sigma}\cdot\mathbf p$ so that $(\boldsymbol\sigma\cdot\mathbf p)^2=\mathbf p^2 I_2$ and Schrodinger's equation identically applies to each component of the wave vector $H\Psi_i=(p^2/2m + V)\Psi_i = E\Psi_i$ 


#### Minimal coupling 

In presence of electromagnetic field $\boldsymbol A$, the momentum becomes $\boldsymbol p-q\boldsymbol A$ so that $\left[P_i,P_j\right]=i\hbar q\epsilon_{ijk}B_k$. 
As a result $\frac{(\boldsymbol\sigma\cdot(\mathbf p-q\mathbf A))^2}{2m}=\frac{(\mathbf p-q\mathbf A)^2}{2m} I_2 - 2\frac{q}{2m}\boldsymbol S\cdot\mathbf B$.

Using the Bohr magneton $\mu_B=q\hbar/2m$ the last term is known as the Zeeman term : 
$$
    H_{zeeman} = -\boldsymbol\mu_{\mathbf S}\cdot\mathbf B = -g_s\frac{\mu_B}{\hbar}\mathbf S\cdot\mathbf B
$$ 
where $g_s=2$ is the anomalous gyromagnetic ratio. 

This creates an important asymmetry : 

$$\begin{eqnarray}
\mathbf J       &=& \mathbf L +\mathbf S\\ 
\boldsymbol\mu_J&=& \boldsymbol\mu_L +\boldsymbol\mu_S = \frac{\mu_B}{\hbar}(\mathbf L + 2\mathbf S)
\end{eqnarray}
$$

meaning the total angular momentum $\mathbf J$ is not aligned with its associated magnetic moment $\boldsymbol\mu_J$.



## Spin related Experiments


### Stoner orbital-filling

### Gyromagnetic moment of the electron 